import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import styled from '@emotion/styled';
import clsx from 'clsx';
import AppBarTodo from 'components/appBar/appBarTodo';
import TodoReviewCard from 'components/todo/card';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import { useSelector } from "react-redux";
import { stateUser } from "state/userReducer";

import 'date-fns';

const useStyles = makeStyles((theme) => ({
  paper: {
  },
  paperTodo: {
    padding: theme.spacing(2),
    //textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "100%",
    maxHeight: "100%",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    borderRadius: "20px",
    boxShadow: "0px 0px 8px -2px #ccc"
  },
  name: {
    color: "#282828",
    fontWeight: "500",
    textAlign: "left",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    "& > span": {
      color: "#7D7D7D"
    }
  },
  contentTodo: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
    overflow: "auto",
    height: "100%",
    maxHeight: "100%",
  }
}));

const TodoComponetnStyle = styled.div(
  {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },
  props => {
  }
)

export default function Home() {
  const classes = useStyles();
  const userState = useSelector(stateUser);

  return (
    <TodoComponetnStyle>
      <AppBarTodo id={"appBarTodo"} />
      <Typography id={"typog-name-user"} gutterBottom className={classes.name}>
        Hola, Brayan
    <Typography variant="caption" display="block" gutterBottom>
          Estas son tus tareas de hoy
    </Typography>
      </Typography>
      <Box className={classes.contentTodo}>
        <TodoReviewCard></TodoReviewCard>
        <TodoReviewCard></TodoReviewCard>
        <TodoReviewCard></TodoReviewCard>
        <TodoReviewCard></TodoReviewCard>
        <TodoReviewCard></TodoReviewCard>
        <TodoReviewCard></TodoReviewCard>
      </Box>
    </TodoComponetnStyle>
  )
}
