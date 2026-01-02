import { legacy_createStore as createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { ContactsReducer } from "./ContactsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { FilterReducer } from "./FilterSlice";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist";


const contactsPersistConfig = {
  key: 'contacts',
  storage
}


export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, ContactsReducer),
    filter: FilterReducer,
  },
});

export const persistor = persistStore(store)
