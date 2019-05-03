import Dashboard from './Dashboard';
import DataSource from './DataSource';
import Entity from './Entity';
import Graph from './Graph';
import Line from './Line';
import LineGenerator from './LineGenerator';
import Mutation from './Mutation';
import Point from './Point';
import Query from './Query';
import Subscription from './Subscription';
import User from './User';

export default {
  Dashboard: {
    createdBy: Dashboard.createdBy,
    entity: Dashboard.entity,
    graphs: Dashboard.graphs
  },
  DataSource: {
    createdBy: DataSource.createdBy,
    lineGenerators: DataSource.lineGenerators,
  },
  Entity: {
    createdBy: Entity.createdBy,
    dashboards: Entity.dashboards,
    graphs: Entity.graphs
  },
  Graph: {
    createdBy: Graph.createdBy,
    dashboard: Graph.dashboard,
    entity: Graph.entity,
    lineGenerators: Graph.lineGenerators,
  },
  Line: {
    lineGenerator: Line.lineGenerator,
    points: Line.points,
  },
  LineGenerator: {
    createdBy: LineGenerator.createdBy,
    dataSource: LineGenerator.dataSource,
    graph: LineGenerator.graph,
    line: LineGenerator.line,
  },
  Mutation,
  Point: {
    line: Point.line,
  },
  Query,
  Subscription,
  User: {
    dashboards: User.dashboards,
    dataSources: User.dataSources,
    entities: User.entities,
    graphs: User.graphs,
    lineGenerators: User.lineGenerators,
  }
}