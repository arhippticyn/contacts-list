import { createSlice } from "@reduxjs/toolkit";

const FilterInitailState = '';

const FilterSlice = createSlice({
  name: "filter",
  initialState: FilterInitailState,

  reducers: {
    FilterContacts: {
      reducer(state, action) {
        return action.payload;
      },
      prepare(value) {
        return {
          payload: value,
        };
      },
    },
  },
});

export const { FilterContacts } = FilterSlice.actions;
export const FilterReducer = FilterSlice.reducer;
