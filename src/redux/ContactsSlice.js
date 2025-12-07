import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { AddContacts, DeleteContacts } from "./operations";

const contactsInitialState = {
  loading: false,
  error: null,
  contacts: [],
};

const ContactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  // reducers: {
  //     // AddContasts: {
  //     //     reducer(state, action) {
  //     //         state.push(action.payload)
  //     //     },
  //     //     prepare(name, number) {
  //     //         return {
  //     //             payload: {
  //     //                 id: nanoid(),
  //     //                 name,
  //     //                 number
  //     //             }
  //     //         }
  //     //     }
  //     // },
  //     AddContasts: (state, action) => {

  //     }
  //     DeleteContacts: {
  //         reducer(state, action) {
  //            return state.filter(contact => contact.id !== action.payload)
  //         },
  //         prepare(id) {
  //             return {
  //                 payload: id
  //             }
  //         }
  //     }
  // }
  extraReducers: (builder) => {
    builder
      .addCase(AddContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(AddContacts.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
        state.loading = false;
      })
      .addCase(AddContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(DeleteContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(DeleteContacts.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload
        );
        state.loading = false;
      })
      .addCase(DeleteContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// export const { AddContasts, DeleteContacts } = ContactsSlice.actions

export const ContactsReducer = ContactsSlice.reducer;
