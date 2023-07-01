import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ImAddressBook, ImUserPlus } from "react-icons/im";

import ContactList from "../../components/ContactList";
import Filter from "../../components/Filter";
import {
  Section,
  Title,
  TitleWrap,
  AddContactLink,
} from "./ContactsPage.styled";

const ContactsPages: React.FC = () => {
  const location = useLocation();

  return (
    <Section>
      <Helmet>
        <title>Contacts list in Phone book</title>
        <meta
          name="description"
          content="Use your contact list, search for a contact by name and change the values of the fields in the contact."
        />
        <meta name="Author" content="Bohdan100" />
      </Helmet>
      <TitleWrap>
        <ImAddressBook style={{ fontSize: "30px" }} />
        <Title>Contacts</Title>
        <AddContactLink to="/contacts/add" state={{ from: location }}>
          <ImUserPlus style={{ fontSize: "30px" }} />
        </AddContactLink>
      </TitleWrap>
      <Filter />
      <ContactList />
    </Section>
  );
};

export default ContactsPages;
