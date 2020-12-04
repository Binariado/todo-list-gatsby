import React from 'react';
import { Provider } from 'react-redux';
import store from './src/state/store';
import {
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import "./src/styles/global.scss"

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        {element}
      </MuiPickersUtilsProvider>
    </Provider>
  );
};
