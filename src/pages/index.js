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
  Grid
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
  conteS: {
    height: "100%",
    width: "100%",

  },
  conteBox:{
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
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
  const userState = useSelector(stateUser);
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Layout>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Item One" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(0)}/>
            </Tabs>

            <TabPanel  value={value} index={0}>
              <DatePicker />
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>

          </Paper>
        </Grid>
        <TodoView></TodoView>
      </Grid>
    </Layout>
  )
}
