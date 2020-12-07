import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import styled from '@emotion/styled';
import TodoView from 'components/todo/todo';
import DatePicker from 'components/DatePicker';
import ComponentSwipe from 'components/SwipeableViews'
import Layout from "../components/layout";
import {
  Box,
  Paper,
  Typography,
  Container,
  Tabs,
  Tab,
  AppBar,
  Grid,
  useMediaQuery
} from '@material-ui/core';
import { sizing } from '@material-ui/system';
import { useSelector } from "react-redux";
import { stateUser } from "state/userReducer";

import 'date-fns';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    //width: 500,
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  paper: {
    padding: theme.spacing(2),
    //textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "100%",
    maxHeight: "100%",
    display: "flex",
    flexDirection: "column"
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
  conteS: {
    height: "100%",
    width: "100%",

  },
  conteBox: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  tabs: {
    position: "fixed",
    bottom: "0",
    left: "0",
    right: "0",
    marginBottom: "10px",
    width: "100%",
    zIndex: "111111",
  }
}));


function TabPanel(props) {
  const classes = useStyles();
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
      className={classes.conteS}
    >
      {value === index && (
        <Box p={3} className={classes.conteBox}>
          {children}
        </Box>
      )}
    </div>
  );
}



TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}


export default function Home() {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:1030px)');
  const userState = useSelector(stateUser);
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(matches);


  return (
    <Layout>
      <Grid container spacing={3}>
        <Grid item xs={matches ? 8 : 12} style={{ maxHeight: "100%" }}>
          <div className={classes.paper}>
            <TabPanel value={value} index={0}>
              {matches ?
                <DatePicker />
                :
                <TodoView />
              }
            </TabPanel>

            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>

            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
              className={matches ? '' : classes.tabs}
            >
              <Tab label="Item One" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(0)} />
            </Tabs>
          </div>
        </Grid>
        {matches && (
          <Grid item xs={4} style={{ maxHeight: "100%" }}>
            <Paper elevation={0} id={"paper-todo"}
              className={classes.paperTodo}>
              <TodoView></TodoView>
            </Paper>
          </Grid>
        )}
      </Grid>
    </Layout>
  )
}
