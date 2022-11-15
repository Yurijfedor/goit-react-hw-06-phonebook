import { ContactItem } from "./contact";
import { Contact } from "../../redux/contactsSlice";

interface Iprops {
  filteredContacts: Contact[];
}

export const ContactList: React.FC<Iprops> = ({ filteredContacts }) => {
  return (
    <ul>
      {filteredContacts.map((contact) => {
        return (
          <li key={contact.id}>
            <ContactItem contactInfo={contact} />
          </li>
        );
      })}
    </ul>
  );
};
