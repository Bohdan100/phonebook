import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import ContactForm from "../../components/ContactForm";
import { Section, Title, ContactsLink } from "./AddContact.styled";

const AddContact: React.FC = () => {
  const location = useLocation();
  const backLinkHref: string = location.state?.from ?? "/";

  return (
    <Section>
      <Helmet>
        <title>Add own contact to your personal Phone book</title>
        <meta
          name="description"
          content="Add new contact to own contact list with name and phone number fields."
        />
        <meta name="Author" content="Bohdan100" />
      </Helmet>
      <Title>New Contact</Title>
      <ContactForm />
      <ContactsLink to={backLinkHref}>
        <span>Go to contacts page</span>
      </ContactsLink>
    </Section>
  );
};

export default AddContact;
