import React from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { addContact, Contact } from "../redux/contactsSlice";
import { Box } from "../constans";
import { nanoid } from "nanoid";
import { ContactForm } from "./phonebook/contactForm";
import { ContactList } from "./phonebook/contactList";
import { Filter } from "./phonebook/filter";

export const App: React.FC = () => {
  const contacts = useAppSelector((state) => state.contacts);
  const filter = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  const handleFormSubmit = (name: string, number: string) => {
    const contact: Contact = {
      name,
      number,
      id: nanoid(),
    };
    const checkName = contacts.find((el) => el.name === contact.name);
    !checkName
      ? dispatch(addContact(contact))
      : alert(` ${checkName.name} is already in contacts `);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.value.toLowerCase())
  );

  return (
    <Box
      width="400px"
      p={3}
      ml="auto"
      mr="auto"
      mt={4}
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleFormSubmit} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList filteredContacts={filteredContacts} />
    </Box>
  );
};
