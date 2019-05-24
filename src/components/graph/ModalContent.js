import React, { useState } from 'react'
import { FormControl, InputLabel, Button, Input } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Mutation } from 'react-apollo';
import { GRAPH_MUTATION } from '../../mutations/dashboardMutations';

const rand = () => {
   return Math.round(Math.random() * 20) - 10;
}

const getModalStyle = () => {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'relative',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 2,
    outline: 'none',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
});

const ModalContent = (props) => {
  console.log(props.dashboard.dashboard);
  const { classes } = props;
  const [title, setTitle] = useState('');
  const [interval, setInterval] = useState(15);
  // eslint-disable-next-line no-unused-vars
  const [icon, setIcon] = useState('');

  return (
    <div style={getModalStyle()} className={classes.paper}>
      <div className={classes.form}>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="title">title</InputLabel>
          <Input type="text" id="title" name="title" autoFocus required 
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="interval">Interval in minutes</InputLabel>
          <Input type="number" id="interval" name="interval" autoFocus required 
            value={interval}
            onChange={e => setInterval(Number(e.target.value))}
          />
        </FormControl>
        <Mutation
          mutation={GRAPH_MUTATION}
          variables={{
            dashboardId: props.dashboard.dashboard,
            data:{ title,
              updateInterval:interval
              // createdBy: { create: { id: localStorage.getItem(UID) } } 
            }
          }}
          onError={error => handleError(error)}
          onCompleted={data => onSuccess(data)}
        >
          {createGraphMutation => (
            <Button
              color="primary"
              onClick={createGraphMutation}
            >
              create graph
            </Button>
          )}
        </Mutation>
      </div>
    </div>
  )
}

const handleError = async error => {
  console.log(error);
}

const onSuccess = async (data) => {
  window.alert(`${data.createGraph.title} added`);
  window.location.reload();
}

export default withStyles(styles)(ModalContent)
