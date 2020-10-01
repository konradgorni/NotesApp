import { createSlice } from '@reduxjs/toolkit';

export const userInfo = createSlice({
  name: 'user',
  initialState: {
    isAuth: false,
    userID: '',
  },
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setID: (state, action) => {
      state.userID = action.payload;
    },
  },
});

export const { setAuth, setID } = userInfo.actions;

export const userID = (state) => state.user.userID;
export const isAuth = (state) => state.user.isAuth;

export default userInfo.reducer;
