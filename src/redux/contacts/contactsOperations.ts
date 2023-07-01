import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

import { AsyncThunkConfig } from "../commonTypes";
import { Contact } from "./contactsTypes";

export const fetchAllContacts = createAsyncThunk<
  Contact[],
  undefined,
  AsyncThunkConfig
>("contacts/fetchAllContacts", async (_, { rejectWithValue }) => {
  try {
    const { data }: AxiosResponse<Contact[]> = await axios.get("/contacts");
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    } else {
      const errorMessage =
        (error as { response?: { data?: { message?: string } } })?.response
          ?.data?.message || "Fetch all contacts failed";
      return rejectWithValue(errorMessage);
    }
  }
});

export const addContact = createAsyncThunk<
  Contact,
  Omit<Contact, "id">,
  AsyncThunkConfig
>(
  "contacts/addContact",
  async (contactData: Omit<Contact, "id">, { rejectWithValue }) => {
    try {
      const { data }: AxiosResponse<Contact> = await axios.post(
        "/contacts",
        contactData
      );
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        const errorMessage =
          (error as { response?: { data?: { message?: string } } })?.response
            ?.data?.message || "Add contact failed";
        return rejectWithValue(errorMessage);
      }
    }
  }
);

export const updateContact = createAsyncThunk<
  Contact,
  Contact,
  AsyncThunkConfig
>(
  "contacts/updateContact",
  async (contactData: Contact, { rejectWithValue }) => {
    try {
      const { id, name, number } = contactData;
      const { data }: AxiosResponse<Contact> = await axios.patch(
        `/contacts/${id}`,
        { name, number }
      );
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        const errorMessage =
          (error as { response?: { data?: { message?: string } } })?.response
            ?.data?.message || "Add contact failed";
        return rejectWithValue(errorMessage);
      }
    }
  }
);

export const deleteContact = createAsyncThunk<
  Contact,
  string,
  AsyncThunkConfig
>("contacts/deleteContact", async (contactId: string, { rejectWithValue }) => {
  try {
    const { data }: AxiosResponse<Contact> = await axios.delete(
      `/contacts/${contactId}`
    );

    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    } else {
      const errorMessage =
        (error as { response?: { data?: { message?: string } } })?.response
          ?.data?.message || "Delete contact failed";
      return rejectWithValue(errorMessage);
    }
  }
});
