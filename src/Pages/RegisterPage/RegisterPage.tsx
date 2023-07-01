import { Helmet } from "react-helmet-async";

import RegisterForm from "../../components/RegisterForm";
import { Container, Section, Title, LoginLink } from "./RegisterPage.styled";

const RegisterPage: React.FC = () => {
  return (
    <Container>
      <Helmet>
        <title>Register to Phone book</title>
        <meta
          name="description"
          content="Register and get your personal secure contacts book!"
        />
        <meta name="Author" content="Bohdan100" />
      </Helmet>
      <Section>
        <Title>Registration</Title>
        <RegisterForm />
        <LoginLink to="/login">
          <span>Go to login page</span>
        </LoginLink>
      </Section>
    </Container>
  );
};

export default RegisterPage;
