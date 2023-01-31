import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register } from './operationsAuth';

const initialStateAuth = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialStateAuth,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user.name = null;
      state.user.email = null;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const authReducer = authSlice.reducer;
