import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

const filterInitialState = "";

const filtersSlice = createSlice({
  name: "filter",
  initialState: { value: filterInitialState },
  reducers: {
    setFilter(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const selectFilterValue = (state: RootState) => state.filter;
export const filterReducer = filtersSlice.reducer;
