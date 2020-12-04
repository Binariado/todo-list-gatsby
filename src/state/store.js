import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './userReducer';


export default configureStore({
  reducer: {
    user: loginReducer
  },
});