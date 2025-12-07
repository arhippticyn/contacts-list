import { legacy_createStore as createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { ContactsReducer } from "./ContactsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { FilterReducer } from "./FilterSlice";

export const store = configureStore({
  reducer: {
    contacts: ContactsReducer,
    filter: FilterReducer,
  },
});
