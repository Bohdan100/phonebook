import { FC, useEffect } from "react";
import { useTsDispatch, useTsSelector } from "../../redux/reduxHooks";
import { fetchAllContacts } from "../../redux/contacts/contactsOperations";
import { sortedFilteredContacts } from "../../redux/contacts/contactsSlectors";
import { Contact } from "../../redux/contacts/contactsTypes";

import ContactItem from "../ContactItem";
import { ListContact } from "./ContactList.styled";

const ContactList: FC = () => {
  let filteredContacts: Array<Contact> | [] = useTsSelector(
    sortedFilteredContacts
  );
  const dispatch = useTsDispatch();

  useEffect((): void => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <ListContact>
      {filteredContacts &&
        filteredContacts.map((contact: Contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
    </ListContact>
  );
};

export default ContactList;
