import React from 'react';
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { IconButton, Typography } from '@material-ui/core';
import { red, green, grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1.2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    color: theme.palette.text.secondary,
    display: "flex",
    borderRadius: "15px",
    alignItems: "center"
  },
  formControl: {
    flexGrow: 1,
    //display: "flex"
  },

}));

const GreenCheckbox = withStyles({
  root: {
    color: grey[400],
    '&$checked': {
      color: "#209472",
    },
    '& > MuiIconButton-label': {
      border: "1px",
      borderRadius: "10px"
    }
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const TitleTodo = withStyles((theme) => ({
  root: {
    margin: "0px",
    paddingLeft: theme.spacing(0.5),
    color: "#1b1b1b",
  }
}))((props) => <Typography {...props} />);

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={1} className={classes.paper}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  value="end"
                  control={<GreenCheckbox />}
                  label={
                    <TitleTodo variant="caption" display="block" gutterBottom>
                      Dearrollo
                    </TitleTodo>
                  }
                  labelPlacement="end"
                />
              </FormGroup>
            </FormControl>
            <IconButton aria-label="settings">
              <MoreHorizIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
