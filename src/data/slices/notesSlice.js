import { createSlice } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    arrayLength: 0,
    notes: [],
  },
  reducers: {
    fetchNotesFirebase: (state, action) => {
      state.notes = state.notes.concat(action.payload);
    },
    setArrayLength: (state, action) => {
      state.arrayLength = action.payload;
    },
    incrementArrayLength: (state, action) => {
      state.arrayLength += 1;
    },
  },
});

export const { fetchNotesFirebase, setArrayLength, incrementArrayLength } = notesSlice.actions;

// export const user = (state) => state.userInfo.userID;
// export const isAuth = (state) => state.user.isAuth;
export const arrayLength = (state) => state.notesSlice.arrayLength;

export default notesSlice.reducer;
