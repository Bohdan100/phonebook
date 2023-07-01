import { FC } from "react";
import { useTsDispatch, useTsSelector } from "../../redux/reduxHooks";
import { updateContact } from "../../redux/contacts/contactsOperations";
import { getContacts } from "../../redux/contacts/contactsSlectors";
import { useNavigate } from "react-router-dom";
import { nameVerification } from "../../helpers";

import { useFormik, FormikConfig, FormikHelpers } from "formik";
import { validContactSchema, ContactFormType } from "../../schemas";
import { Contact } from "../../redux/contacts/contactsTypes";

import toast from "react-hot-toast";
import { succesStyle, errStyle } from "../../helpers";

import {
  FormWrap,
  Label,
  LabelName,
  Input,
  ErrorMessageWrap,
  AddButton,
} from "./UpdateContactForm.styled";

const UpdateContactForm: FC<{ currentContact: Contact }> = ({
  currentContact,
}) => {
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

    const changedContact: Contact = {
      id: currentContact.id,
      name: values.name,
      number: values.number,
    };

    dispatch(updateContact(changedContact))
      .unwrap()
      .then(() => {
        toast.success("Contact updated!", succesStyle);
      })
      .catch(() => toast.error("Can't updated contact", errStyle));

    resetForm();
    navigate("/contacts", { replace: true });
  };

  const formikConfig: FormikConfig<ContactFormType> = {
    initialValues: {
      name: currentContact.name,
      number: currentContact.number,
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.number}
          />
          {formik.errors.number ? (
            <ErrorMessageWrap>{formik.errors.number}</ErrorMessageWrap>
          ) : null}
        </Label>
        <AddButton type="submit" aria-label="add contact">
          Update contact
        </AddButton>
      </FormWrap>
    </form>
  );
};

export default UpdateContactForm;
