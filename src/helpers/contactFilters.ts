import { Contact } from "../redux/contacts/contactsTypes";

export const nameVerification = (
  name: string,
  contacts: Contact[]
): Contact | undefined => {
  return contacts.find((contact: Contact) => name === contact.name);
};
