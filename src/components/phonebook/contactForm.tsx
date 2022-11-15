import { FormEvent, useState } from "react";
import { FormEl, LabelEl, ButtonEl } from "./contactForm.styled";

interface IProps {
  onSubmit(name: string, number: string): void;
}

export const ContactForm: React.FC<IProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const name = evt.target.name;
    switch (name) {
      case "name":
        setName(evt.target.value);
        break;

      case "number":
        setNumber(evt.target.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    onSubmit(name, number);
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <FormEl onSubmit={handleSubmit}>
      <LabelEl>
        Name
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </LabelEl>
      <LabelEl>
        Number
        <input
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </LabelEl>

      <ButtonEl type="submit">Add contact</ButtonEl>
    </FormEl>
  );
};
