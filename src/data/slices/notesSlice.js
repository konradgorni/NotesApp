import { createSlice } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: [
      {
        id: 'aw1',
        title: 'zakupy do a',
        content: 'est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
        important:true,
        date:"24.04.2000"
      },
      { id: '2sa', title: 'notatka3', content: 'PRZYKLADOWE SOBIE TU COS PISZE',important:true },
      { id: '4as', title: 'notatka4', content: 'PRZYKLADOWE SOBIE TU COS PISZE',important:false },

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
