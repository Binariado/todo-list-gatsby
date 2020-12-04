import React from 'react';
import { Provider } from 'react-redux';
import store from './src/state/store';
import {
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        {element}
      </MuiPickersUtilsProvider>
    </Provider>
  );
};

// export const wrapPageElement = ({ element, props }) => {
//   // props provide same data to Layout as Page element will get
//   // including location, data, etc - you don't need to pass it
//   return (
//     <Layout {...props}>
//       ds
//       {element}
//     </Layout>
//   )
// }