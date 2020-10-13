import { configureStore } from '@reduxjs/toolkit';
import userInfo from 'data/slices/userInfoSlice';
import notesSlice from 'data/slices/notesSlice';

export default configureStore({
  reducer: {
    userInfo,
    notesSlice,
  },
});
