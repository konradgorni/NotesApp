import { createSlice } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: [],
  },
  reducers: {
    fetchNotesFirebase: (state, action) => {
      state.notes = action.payload;
    },
  },
});

export const { fetchNotesFirebase } = notesSlice.actions;

// export const user = (state) => state.userInfo.userID;
// export const isAuth = (state) => state.user.isAuth;

export default notesSlice.reducer;
