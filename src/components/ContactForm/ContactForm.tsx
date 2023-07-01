import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useTsDispatch, useTsSelector } from "../../redux/reduxHooks";

import { addContact } from "../../redux/contacts/contactsOperations";
import { getContacts } from "../../redux/contacts/contactsSlectors";
import { nameVerification } from "../../helpers";
import { Contact } from "../../redux/contacts/contactsTypes";

import { useFormik, FormikConfig, FormikHelpers } from "formik";
import { validContactSchema, ContactFormType } from "../../schemas";

import toast from "react-hot-toast";
import { succesStyle, errStyle } from "../../helpers";

import {
  FormWrap,
  Label,
  LabelName,
  Input,
  ErrorMessageWrap,
  AddButton,
} from "./ContactForm.styled";

const ContactForm: FC = () => {
  const dispatch = useTsDispatch();
  const navigate = useNavigate();
  const contacts = useTsSelector(getContacts);

  const handleSubmit = async (
    values: ContactFormType,
    { resetForm }: FormikHelpers<ContactFormType>
  ) => {
    if (nameVerification(values.name, contacts)) {
      toast.error(`${values.name} is already in contacts`, errStyle);
      return;
    }

    const newContact: Omit<Contact, "id"> = {
      name: values.name,
      number: values.number,
    };

    dispatch(addContact(newContact))
      .unwrap()
      .then(() => {
        toast.success("Contact created!", succesStyle);
      })
      .catch(() => toast.error("Can't created contact", errStyle));

    resetForm();
    navigate("/contacts", { replace: true });
  };

  const formikConfig: FormikConfig<ContactFormType> = {
    initialValues: {
      name: "",
      number: "",
    },
    validationSchema: validContactSchema,
    onSubmit: handleSubmit,
  };

  const formik = useFormik(formikConfig);

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormWrap>
        <Label>
          <LabelName htmlFor="name">Name</LabelName>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Enter contact name"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.errors.name ? (
            <ErrorMessageWrap>{formik.errors.name}</ErrorMessageWrap>
          ) : null}
        </Label>
        <Label>
          <LabelName htmlFor="number">Number</LabelName>
          <Input
            id="number"
            name="number"
            type="tel"
            placeholder="Enter phone number, at least 3 character"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.number}
          />
          {formik.errors.number ? (
            <ErrorMessageWrap>{formik.errors.number}</ErrorMessageWrap>
          ) : null}
        </Label>
        <AddButton type="submit" aria-label="add contact">
          Add contact
        </AddButton>
      </FormWrap>
    </form>
  );
};

export default ContactForm;
