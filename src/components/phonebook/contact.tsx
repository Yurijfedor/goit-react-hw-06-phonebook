import { ButtonEl } from "./contactForm.styled";
import { Box } from "../../constans";
import { useAppDispatch } from "../../redux/hooks";
import React from "react";
import { deleteContact } from "../../redux/contactsSlice";
import { Contact } from "../../redux/contactsSlice";

interface IProps {
  contactInfo: Contact;
}

export const ContactItem: React.FC<IProps> = ({
  contactInfo: { name, number, id },
}) => {
  const dispatch = useAppDispatch();
  return (
    <Box display="flex" justifyContent="space-between">
      {name}: {number}
      <ButtonEl data-id={id} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </ButtonEl>
    </Box>
  );
};
