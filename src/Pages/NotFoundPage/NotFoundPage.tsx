import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { ErrorWrap, ErrorText } from "./NotFoundPage.styled";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);
  }, [navigate]);

  return (
    <ErrorWrap>
      <Helmet>
        <title>Not Found Page</title>
      </Helmet>
      <ErrorText>Incorrect search URL-address...</ErrorText>
    </ErrorWrap>
  );
};

export default NotFoundPage;
