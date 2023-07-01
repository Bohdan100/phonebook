import { FC } from "react";
import { useTsDispatch } from "../../redux/reduxHooks";
import { logIn } from "../../redux/authUser/authOperations";

import { Formik, Form, FormikHelpers } from "formik";
import { validLogInSchema, logInSchemaType } from "../../schemas";

import toast from "react-hot-toast";
import { succesStyle, errStyle } from "../../helpers";

import {
  FormWrap,
  Label,
  LabelName,
  Input,
  ErrorMessageWrap,
  LoginButton,
} from "./LoginForm.styled";

const LoginForm: FC = () => {
  const dispatch = useTsDispatch();

  const initialValues: logInSchemaType = { email: "", password: "" };

  const handleSubmit = (
    values: logInSchemaType,
    { resetForm }: FormikHelpers<logInSchemaType>
  ) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => toast.success(`Hello, ${values.email}!`, succesStyle))
      .catch(() =>
        toast.error(
          "Error in transmitted data. Try logging in again!",
          errStyle
        )
      );

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validLogInSchema}
      validateOnBlur
    >
      {({ errors, touched }) => (
        <Form>
          <FormWrap>
            <Label htmlFor="email">
              <LabelName>Email</LabelName>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email (> 3 characters)"
                autoComplete="on"
                required
              />
              {errors.email && touched.email ? (
                <ErrorMessageWrap>{errors.email}</ErrorMessageWrap>
              ) : null}
            </Label>
            <Label htmlFor="password">
              <LabelName>Password</LabelName>
              <Input
                type="password"
                name="password"
                placeholder="Enter your password (> 3 characters)"
                required
              />
              {errors.password && touched.password ? (
                <ErrorMessageWrap>{errors.password}</ErrorMessageWrap>
              ) : null}
            </Label>
            <LoginButton type="submit">Login</LoginButton>
          </FormWrap>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
