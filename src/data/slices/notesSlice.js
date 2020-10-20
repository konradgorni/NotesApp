import { createSlice } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: [

    ],
  },
  reducers: {
    fetchNotesFirebase: (state, action) => {
      state.notes = state.notes.concat(action.payload);
    },
    newArrayWithoutDeletedElement: (state, action) => {
      state.notes = action.payload;
    },
    resetNotesArray: (state) => {
      state.notes = [];
    },
  },
});

export const {
  fetchNotesFirebase,
  newArrayWithoutDeletedElement,
  resetNotesArray,
} = notesSlice.actions;

export const notesList = (state) => state.notesSlice.notes;
export const arrayLength = (state) => state.notesSlice.arrayLength;

export default notesSlice.reducer;
