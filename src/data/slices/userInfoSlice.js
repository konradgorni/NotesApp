import { createSlice } from '@reduxjs/toolkit';

export const userInfo = createSlice({
  name: 'user',
  initialState: {
    isAuth: false,
    userID: 'ZDUBOK1nZKbxil8ENRlpoLS7son1',
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

export const user = (state) => state.userInfo.userID;
export const isAuth = (state) => state.user.isAuth;

export default userInfo.reducer;
