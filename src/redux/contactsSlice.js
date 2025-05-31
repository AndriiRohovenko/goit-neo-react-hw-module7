import { createSlice } from '@reduxjs/toolkit';
import mockedData from '../mockedData/contacts.json';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: mockedData,
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(task => task.id === action.payload);
      state.items.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
