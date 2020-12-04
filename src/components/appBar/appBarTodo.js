import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from 'components/appBar/avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "left"
  },
  appBar:{
    boxShadow: "none",
    background: "transparent"
  }
}));

export default function AppBarTodo(props){
  const classes = useStyles();

  return (
    <div {...props} className={classes.root}>
      <div className={classes.title}>

      </div>
      <Avatar ></Avatar>
    </div>
  );
}