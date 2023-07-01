import { configureStore } from "@reduxjs/toolkit";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { AnyAction } from "redux";

import authReducer from "./authUser/authSlice";
import contactsReducer from "./contacts/contactsSlice";
import filterReducer from "./filter/filterSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "authUser",
  storage,
  whitelist: ["token"],
};

const persistedAuthUserReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    authUser: persistedAuthUserReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch &
  ThunkDispatch<RootState, undefined, AnyAction>;

// export type RootState = ReturnType<typeof combineReducers>;
