import { createSlice } from '@reduxjs/toolkit';

export const loginReducer = createSlice({
  name: 'user',
  initialState: {
    value: {
      isAuthenticated: false
    },
  },
  reducers: {
    userRemember: state => {
      
    },
    authUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { userRemember, authUser } = loginReducer.actions;

export const stateUser = state => state.user.value;

export default loginReducer.reducer;