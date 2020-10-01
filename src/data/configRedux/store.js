import { configureStore } from '@reduxjs/toolkit';
import slice from 'data/slices/testSlice';
import userInfo from 'data/slices/userInfoSlice';

export default configureStore({
  reducer: {
    userInfo,
  },
});
