import { Helmet } from "react-helmet-async";

import LoginForm from "../../components/LoginForm";
import { Container, Section, Title, RegisterLink } from "./LoginPage.styled";

const LoginPage: React.FC = () => {
  return (
    <Container>
      <Helmet>
        <title>Login to Phone book</title>
        <meta
          name="description"
          content="Login in your own contacts book and enter your personal secure contacts list."
        />
        <meta name="Author" content="Bohdan100" />
      </Helmet>
      <Section>
        <Title>Login or register</Title>
        <LoginForm />
        <RegisterLink to="/">
          <span>Go to registration page</span>
        </RegisterLink>
      </Section>
    </Container>
  );
};

export default LoginPage;
