import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'user',
  initialState: {
    isAuth: false,
    userUID: '',
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { firebaseTasks, setName } = slice.actions;

export const selectTasks = (state) => state.tasks.zadania;
export const showName = (state) => state.tasks.name;

export default slice.reducer;
