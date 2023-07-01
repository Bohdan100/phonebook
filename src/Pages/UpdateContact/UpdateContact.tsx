import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Contact } from "../../redux/contacts/contactsTypes";

import UpdateContactForm from "../../components/UpdateContactForm";
import { Section, Title, ContactsLink } from "./UpdateContact.styled";

const UpdateContact: React.FC = () => {
  const { state } = useLocation();

  const backLinkHref: string = state?.from ?? "/";

  const currentContact: Contact = {
    id: state.id,
    name: state.name,
    number: state.number,
  };

  return (
    <Section>
      <Helmet>
        <title>Update existing contact in your personal Phone book</title>
        <meta
          name="description"
          content="Update the name or number of an existing contact in own phone book."
        />
        <meta name="Author" content="Bohdan100" />
      </Helmet>
      <Title>Update Contact</Title>
      <UpdateContactForm currentContact={currentContact} />
      <ContactsLink to={backLinkHref}>
        <span>Go to contacts page</span>
      </ContactsLink>
    </Section>
  );
};

export default UpdateContact;
