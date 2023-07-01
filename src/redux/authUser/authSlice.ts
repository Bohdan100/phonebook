import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refetch } from "./authOperations";

import { PendingAction, RejectedAction } from "../commonTypes";
import { AuthState } from "./authTypes";

const initialState: AuthState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefetching: false,
  authIsLoading: false,
  authError: null,
};

const authUserSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.authIsLoading = false;
        state.authError = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.authIsLoading = false;
        state.authError = null;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.authError = null;
        state.authIsLoading = false;
      })
      .addCase(refetch.pending, (state) => {
        state.isRefetching = true;
      })
      .addCase(refetch.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefetching = false;
        state.authError = null;
        state.authIsLoading = false;
      })
      .addCase(refetch.rejected, (state) => {
        state.isRefetching = false;
      })
      .addMatcher(
        (action): action is PendingAction => action.type?.endsWith("/pending"),
        (state) => {
          state.authIsLoading = true;
          state.authError = null;
        }
      )
      .addMatcher(
        (action): action is RejectedAction =>
          action.type?.endsWith("/rejected"),
        (state, action) => {
          state.authError = action.payload;
          state.authIsLoading = false;
        }
      );
  },
});

export default authUserSlice.reducer;
