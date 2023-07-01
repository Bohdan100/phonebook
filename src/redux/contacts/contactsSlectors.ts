import { createSelector } from "reselect";
import { RootState } from "../store";
import { Contact } from "./contactsTypes";

export const getContacts = (state: RootState) => state.contacts.items;
export const getFilter = (state: RootState) => state.filter;
export const getIsLoading = (state: RootState) => state.contacts.isLoading;
export const getError = (state: RootState) => state.contacts.error;

export const sortedFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts: Array<Contact>, filter: string) => {
    const filteredContacts = contacts.filter((contact: Contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts.sort(function (a: Contact, b: Contact) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }
);
