import * as Yup from "yup";

const registerSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, "Name must contain at least 2 characters")
    .required("Name is required field."),
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

export type registerSchemaType = Yup.InferType<typeof registerSchema>;

export const validRegisterSchema =
  registerSchema as Yup.Schema<registerSchemaType>;
