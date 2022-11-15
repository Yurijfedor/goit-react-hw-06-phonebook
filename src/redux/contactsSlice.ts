import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { LS_KEY } from "../constans";

export interface Contact {
  readonly id: string;
  name: string;
  number: string;
}

const contactsInitialState: Contact[] = JSON.parse(
  localStorage.getItem(LS_KEY) || "false"
);

const contactSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState || [],
  reducers: {
    filteredContact(state, action: PayloadAction<Contact[]>) {
      return (state = action.payload);
    },
    addContact(state, action: PayloadAction<Contact>) {
      state.push(action.payload);
      localStorage.setItem(LS_KEY, JSON.stringify(state));
    },

    deleteContact(state, action: PayloadAction<string>) {
      const index = state.findIndex(({ id }) => id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact, filteredContact } =
  contactSlice.actions;

export const selectName = (state: RootState) => state.contacts;

export const contactsReducer = contactSlice.reducer;
