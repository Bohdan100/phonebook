import { RootState } from "../store";

export const getUserEmail = (state: RootState) => state.authUser.user.email;
export const getUserToken = (state: RootState) => state.authUser.token;
export const getUserIsLoggedIn = (state: RootState) =>
  state.authUser.isLoggedIn;
export const getRefetchingUser = (state: RootState) =>
  state.authUser.isRefetching;
