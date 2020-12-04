import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from 'state/store';
import {
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

export const myContext = React.createContext();

const AppProvider = props => {
  const [isDark, setTheme] = useState(false);

  return (
    <myContext.Provider value={{
      isDark,
      changeTheme: () => setTheme(!isDark)
    }}>
      <Provider store={store}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          {props.children}
        </MuiPickersUtilsProvider>
      </Provider>
    </myContext.Provider>
  )
};

export default ({ element }) => (
  <AppProvider>
    {element}
  </AppProvider>
);