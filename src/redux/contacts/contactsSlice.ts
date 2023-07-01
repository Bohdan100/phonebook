import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllContacts,
  addContact,
  updateContact,
  deleteContact,
} from "./contactsOperations";

import { PendingAction, RejectedAction } from "../commonTypes";
import { ContactsState } from "./contactsTypes";

const initialState: ContactsState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (buider) => {
    buider
      .addCase(fetchAllContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...state.items, action.payload];
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.items.map((item) => {
          if (item.id === action.payload.id) {
            item.name = action.payload.name;
            item.number = action.payload.number;
          }
          return item;
        });
        state.error = null;
        state.isLoading = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addMatcher(
        (action): action is PendingAction => action.type?.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action): action is RejectedAction =>
          action.type?.endsWith("/rejected"),
        (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        }
      );
  },
});

export default contactsSlice.reducer;
