import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  username: string | null;
}

const initialState: UserState = {
  username: null,
};

const userSlice = createSlice({
  name: 'user', // trong dự án lớn dùng biến
  initialState,
  reducers: {
    setUsernameRedux(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    logout(state) {
      state.username = null;
    },
  },
});

export const { setUsernameRedux, logout } = userSlice.actions;

export default userSlice.reducer;
