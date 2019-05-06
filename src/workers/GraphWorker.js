import moment from 'moment';
import vm from 'vm';

import { prisma } from '../generated/prisma-client';

export default class GraphWorker {
  constructor() {
    this.executeFunction = this.executeFunction.bind(this);
    this.executeFunctionContext = this.executeFunctionContext.bind(this);
    this.executeLocalFunction = this.executeLocalFunction.bind(this);
    this.executeWebFunction = this.executeWebFunction.bind(this);
    this.findGraphsToUpdate = this.findGraphsToUpdate.bind(this);
    this.updateGraph = this.updateGraph.bind(this);
  }
  async executeFunction(func, { context, dashboard, graph, isDataSource, lineGenerator }) {
    let { options, parametersSchema, source, type } = func;
    
    // get args
    let  args = {};
    if (parametersSchema) {
      let parametersSchemaKeys = Object.keys(parametersSchema);
      let contextVariables = context.variables;
      let dashboardvariables = dashboard.variables;
      let graphVariables = graph.variables;
      for (let i = 0; i < parametersSchemaKeys.length; i++) {
        if (contextVariables && contextVariables[parametersSchemaKeys[i]]) {
          // get the args from the context variables
          args[parametersSchemaKeys[i]] = contextVariables[parametersSchemaKeys[i]];
        } else if (graphVariables && graphVariables[parametersSchemaKeys[i]]) {
          // if args are not found in context variables get them from graph variables
          args[parametersSchemaKeys[i]] = graphVariables[parametersSchemaKeys[i]];
        } else if (dashboardvariables && dashboardvariables[parametersSchemaKeys[i]]) {
          // if args are not found in context variables get them from graph variables
          args[parametersSchemaKeys[i]] = dashboardvariables[parametersSchemaKeys[i]];
        }
      }
    }

    let fragment = `
      fragment LineWithPoints on Line {
        id
        points {
          id
          hidden
          x
          y
        }
      }
    `;
    let line = await prisma.lineGenerator({ id: lineGenerator.id }).line().$fragment(fragment);
    let response;
    if (type === 'LOCAL') {
      // TODO: get responses from web functions and pass them to local functions??
      response = await this.executeLocalFunction(source, line, args, options);
    } else if (type === 'WEB') {
      response = await this.executeWebFunction(source, line, args, options);
    }
    console.log(response);
    if (response.errors && response.errors.length > 0) {
      let { errors } = response;
      for (let i = 0; i < errors.length; i++) {
        prisma.createLog({
          context: {
            connect: { id: context.id }
          },
          message: errors[i].message,
          type: 'ERROR'
        });
      }
    } else {
      if (isDataSource) {
        // create a line for the line generator (if no line already exists)
        if (!line) {
          line = await prisma.createLine({
            lineGenerator: {
              connect: { id: lineGenerator.id }
            }
          });
        }
        // create a point for that line
        await prisma.createPoint({
          hidden: lineGenerator.state === 'HIDDEN',
          line: {
            connect: { id: line.id }
          },
          x: new Date(),
          y: response.data
        });
        // execute hooks
        let hooks = await prisma.lineGenerator({ id: lineGenerator.id }).hooks();
        for (let i = 0; i < hooks.length; i++) {
          this.executeFunctionContext(hooks[i], {
            dashboard,
            graph,
            isDataSource: false,
            lineGenerator
          });
        }
      }
    }
  }
  async executeFunctionContext(context, { dashboard, graph, isDataSource, lineGenerator }) {
    if (context) {
      let func = await prisma.functionContext({ id: context.id }).func();
      this.executeFunction(func, {
        context,
        dashboard,
        graph,
        isDataSource,
        lineGenerator
      });
    }
  }
  async executeLocalFunction(source, line, args, options) {
    // see: https://stackoverflow.com/questions/46561959/execute-javascript-functions-from-a-string-in-nodejs

    const sandbox = {
      args,
      line,
      options
    };
    console.log(sandbox)
    try {
      const script = new vm.Script(`(function(){${source}})()`);
      const context = new vm.createContext(sandbox);
      let data = script.runInContext(context);
      return { data };
    } catch (error) {
      return { errors: [error] };
    }
  }
  async executeWebFunction(source, line, args, options) {
    // TODO
  }
  async findGraphsToUpdate() {
    let graphs = await prisma.graphs({
      where: {
        updateTime_lte: moment().format('YYYY-MM-DDTHH:mm:59Z').toDate()
      }
    });
    for(let i = 0; i < graphs.length; i++) {
      this.updateGraph(graphs[i]);
    }
  }
  async updateGraph(graph) {
     // update the graph
    await prisma.updateGraph({
      where: {
        id: graph.id
      },
      data: {
        updateTime: moment().add(parseInt(graph.updateInterval, 10), 'm').toDate(),
      }
    });
    let dashboard = await prisma.graph({ id: graph.id }).dashboard();
    let lineGenerators = await prisma.graph({ id: graph.id }).lineGenerators({
      where: {
        state_not: 'DISABLED'
      }
    });
    // lineGenerators = lineGenerators.filter(l => l.state !== 'DISABLED');
    for(let i = 0; i < lineGenerators.length; i++) {
      // get the line generator's data source
      let dataSource = await prisma.lineGenerator({ id: lineGenerators[i].id }).dataSource();
      this.executeFunctionContext(dataSource, {
        dashboard,
        graph,
        isDataSource: true,
        lineGenerator: lineGenerators[i]
      });
    }
  }
}
