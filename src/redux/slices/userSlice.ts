import { createSlice } from '@reduxjs/toolkit';
import {
  loginUserAsync,
  logoutUserAsync,
  signInWithGithubAsync,
  signInWithGoogleAsync,
  verifyAuthAsync,
} from '../api';

export interface UserDataState {
  loggedIn: boolean;
  userData: {
    name: string;
    username: string;
    email: string;
    mobile: string;
    avatar: string;
  } | null;
}

const initialState: UserDataState = {
  loggedIn: false,
  userData: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.loggedIn = true;
        state.userData = action.payload?.data;
      })
      .addCase(loginUserAsync.rejected, (state) => {
        state.loggedIn = false;
        state.userData = null;
      })
      .addCase(verifyAuthAsync.fulfilled, (state, action) => {
        state.loggedIn = true;
        state.userData = action.payload;
      })
      .addCase(verifyAuthAsync.rejected, (state) => {
        state.loggedIn = false;
        state.userData = null;
      })
      .addCase(logoutUserAsync.fulfilled, (state) => {
        state.loggedIn = false;
        state.userData = null;
      })
      .addCase(logoutUserAsync.rejected, (state) => {
        state.loggedIn = false;
        state.userData = null;
      })
      .addCase(signInWithGithubAsync.fulfilled, (state, action) => {
        state.loggedIn = true;
        state.userData = action.payload?.data;
      })
      .addCase(signInWithGithubAsync.rejected, (state) => {
        state.loggedIn = false;
        state.userData = null;
      })
      .addCase(signInWithGoogleAsync.fulfilled, (state, action) => {
        state.loggedIn = true;
        state.userData = action.payload?.data;
      })
      .addCase(signInWithGoogleAsync.rejected, (state) => {
        state.loggedIn = false;
        state.userData = null;
      });
  },
});

// Action creators are generated for each case reducer function
// export const { } = userSlice.actions

export default userSlice.reducer;
