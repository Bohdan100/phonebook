import { FC } from "react";
import { useTsDispatch } from "../../redux/reduxHooks";
import { register } from "../../redux/authUser/authOperations";

import { Formik, Form, FormikHelpers, ErrorMessage } from "formik";
import { registerSchemaType, validRegisterSchema } from "../../schemas";

import toast from "react-hot-toast";
import { succesStyle, errStyle } from "../../helpers";

import {
  FormWrap,
  Label,
  LabelName,
  Input,
  ErrorMessageWrap,
  RegisterButton,
} from "./RegisterForm.styled";

const RegisterForm: FC = () => {
  const dispatch = useTsDispatch();

  const initialValues: registerSchemaType = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (
    values: registerSchemaType,
    { resetForm }: FormikHelpers<registerSchemaType>
  ) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => toast.success(`Hello, ${values.name}!`, succesStyle))
      .catch(() =>
        toast.error(
          "Error in transmitted data. Try to register again!",
          errStyle
        )
      );

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validRegisterSchema}
      validateOnBlur
    >
      <Form>
        <FormWrap>
          <Label htmlFor="name">
            <LabelName>Name</LabelName>
            <Input
              type="name"
              name="name"
              placeholder="Enter your name (> 1 characters)"
              autoComplete="on"
              required
            />
            <ErrorMessage component={ErrorMessageWrap} name="name" />
          </Label>
          <Label htmlFor="email">
            <LabelName>Email</LabelName>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email (> 3 characters)"
              autoComplete="on"
              required
            />
            <ErrorMessage component={ErrorMessageWrap} name="email" />
          </Label>
          <Label htmlFor="password">
            <LabelName>Password</LabelName>
            <Input
              type="password"
              name="password"
              placeholder="Enter your password (> 3 characters)"
              required
            />
            <ErrorMessage component={ErrorMessageWrap} name="password" />
          </Label>
          <RegisterButton type="submit">Register</RegisterButton>
        </FormWrap>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
