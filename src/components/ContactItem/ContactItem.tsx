import { FC } from "react";
import { useTsDispatch } from "../../redux/reduxHooks";
import { deleteContact } from "../../redux/contacts/contactsOperations";
import { Contact } from "../../redux/contacts/contactsTypes";
import { useLocation } from "react-router-dom";

import toast from "react-hot-toast";
import { succesStyle, errStyle } from "../../helpers";

import { MdDeleteSweep } from "react-icons/md";
import { ImUser, ImPhone } from "react-icons/im";
import { FaEdit } from "react-icons/fa";

import {
  ContactWrap,
  UpdateContactLink,
  TextWrap,
  DataWrap,
  PhoneLink,
  PhoneLinkText,
  OptionsWrap,
  DeleteButton,
} from "./ContactItem.styled";

const ContactItem: FC<{ contact: Contact }> = ({
  contact: { name, number, id },
}) => {
  const dispatch = useTsDispatch();
  const location = useLocation();

  return (
    <ContactWrap>
      <TextWrap>
        <DataWrap>
          <ImUser style={{ fontSize: "18px" }} /> {name}
        </DataWrap>

        <PhoneLink href={`tel:${number}`}>
          <PhoneLinkText>
            <ImPhone style={{ fontSize: "18px" }} />
            {number}
          </PhoneLinkText>
        </PhoneLink>
      </TextWrap>
      <OptionsWrap>
        <UpdateContactLink
          to="/contacts/update"
          state={{
            from: location,
            id: `${id}`,
            name: `${name}`,
            number: `${number}`,
          }}
        >
          <FaEdit style={{ fontSize: " 20px" }} />
        </UpdateContactLink>
        <DeleteButton
          type="button"
          aria-label="delete contact"
          onClick={() =>
            dispatch(deleteContact(id))
              .unwrap()
              .then(() => {
                toast.success("Contact deleted!", succesStyle);
              })
              .catch(() =>
                toast.error(
                  "An error occurred while deleting a contact, please try again",
                  errStyle
                )
              )
          }
        >
          <MdDeleteSweep style={{ fontSize: " 25px" }} />
        </DeleteButton>
      </OptionsWrap>
    </ContactWrap>
  );
};

export default ContactItem;
