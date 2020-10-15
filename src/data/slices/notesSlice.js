import { createSlice } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: [
      { id: 'aw1', title: 'notatka1', content: 'PRZYKLADOWE SOBIE TU COS PISZE' },
      { id: 'dw2', title: 'notatka2', content: 'PRZYKLADOWE SOBIE TU COS PISZE' },
      { id: '2sa', title: 'notatka3', content: 'PRZYKLADOWE SOBIE TU COS PISZE' },
      { id: '4as', title: 'notatka4', content: 'PRZYKLADOWE SOBIE TU COS PISZE' },
      { id: 'abr', title: 'notatka5', content: 'PRZYKLADOWE SOBIE TU COS PISZE' },
    ],
  },
  reducers: {
    fetchNotesFirebase: (state, action) => {
      state.notes = state.notes.concat(action.payload);
    },
    newArrayWithoutDeletedElement: (state, action) => {
      state.notes = action.payload;
    },
    resetNotesArray: (state, action) => {
      state.notes = [];
    },
  },
});

export const {
  fetchNotesFirebase,
  setArrayLength,
  incrementArrayLength,
  newArrayWithoutDeletedElement,
  resetNotesArray,
} = notesSlice.actions;

export const notesList = (state) => state.notesSlice.notes;
export const arrayLength = (state) => state.notesSlice.arrayLength;

export default notesSlice.reducer;
