import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

import type { User, AuthResponse } from "./authTypes";
import { AsyncThunkConfig } from "../commonTypes";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token: string): void {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset(): void {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk<AuthResponse, User, AsyncThunkConfig>(
  "authUser/register",
  async (userData: User, { rejectWithValue }) => {
    try {
      const { data }: AxiosResponse<AuthResponse> = await axios.post(
        "/users/signup",
        userData
      );
      token.set(data.token);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        const errorMessage =
          (error as { response?: { data?: { message?: string } } })?.response
            ?.data?.message || "Register failed";
        return rejectWithValue(errorMessage);
      }
    }
  }
);

export const logIn = createAsyncThunk<
  AuthResponse,
  Omit<User, "name">,
  AsyncThunkConfig
>(
  "authUser/logIn",
  async (userData: Omit<User, "name">, { rejectWithValue }) => {
    try {
      const { data }: AxiosResponse<AuthResponse> = await axios.post(
        "/users/login",
        userData
      );
      token.set(data.token);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        const errorMessage =
          (error as { response?: { data?: { message?: string } } })?.response
            ?.data?.message || "Login failed";
        return rejectWithValue(errorMessage);
      }
    }
  }
);

export const logOut = createAsyncThunk<void, undefined, AsyncThunkConfig>(
  "authUser/logOut",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post<void>("/users/logout", _);
      token.unset();
      return;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        const errorMessage =
          (error as { response?: { data?: { message?: string } } })?.response
            ?.data?.message || "Logout failed";
        return rejectWithValue(errorMessage);
      }
    }
  }
);

export const refetch = createAsyncThunk<
  Pick<User, "name" | "email">,
  undefined,
  AsyncThunkConfig
>("authUser/refetch", async (_, { rejectWithValue, getState }) => {
  const state = getState();
  const persistedToken = state.authUser.token;

  if (!persistedToken) return rejectWithValue("unable to connect user");
  token.set(persistedToken);

  try {
    const { data }: AxiosResponse<Pick<User, "name" | "email">> =
      await axios.get("/users/current");
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    } else {
      const errorMessage =
        (error as { response?: { data?: { message?: string } } })?.response
          ?.data?.message || "Refresh current user failed";
      return rejectWithValue(errorMessage);
    }
  }
});
