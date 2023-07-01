export type Contact = {
  id: string;
  name: string;
  number: string;
};

export type ContactsState = {
  items: Contact[];
  isLoading: boolean;
  error: null | string;
};
