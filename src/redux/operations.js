import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const AddContacts  = createAsyncThunk(
  "contact/AddContact",
  async (contactData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/add",
        contactData
      );
      return await response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const FetchContacts = createAsyncThunk(
  "contact/FetchContact",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/contact");
      return await response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const DeleteContacts = createAsyncThunk(
  "contact/DeleteContact",
  async (contact_id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/delete/${contact_id}`
      );
      return await response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
