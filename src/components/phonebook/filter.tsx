import { LabelFilterEl } from "./contactForm.styled";
import { useAppDispatch } from "../../redux/hooks";
import { setFilter } from "../../redux/filtersSlice";
import React from "react";

export const Filter: React.FC = () => {
  const dispatch = useAppDispatch();
  // const getFilterValue = (evt) => {
  //   onChange(evt.target.value);
  // };

  return (
    <LabelFilterEl>
      Find contacts by name
      <input
        onChange={(evt) => dispatch(setFilter(evt.currentTarget.value))}
        type="text"
      />
    </LabelFilterEl>
  );
};
