import * as Yup from "yup";

const logInSchema = Yup.object({
  email: Yup.string()
    .trim()
    .email("Enter a valid email")
    .min(4, "Email must contain at least 4 characters")
    .required("Email is required field."),
  password: Yup.string()
    .trim()
    .min(4, "Password must contain at least 4 characters")
    .required("Password is required field."),
});

export type logInSchemaType = Yup.InferType<typeof logInSchema>;

export const validLogInSchema = logInSchema as Yup.Schema<logInSchemaType>;
