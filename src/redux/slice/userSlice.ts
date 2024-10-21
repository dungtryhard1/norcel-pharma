import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  username: string | null;
}

const initialState: UserState = {
  username: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsernameRedux(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
  },
});

export const { setUsernameRedux } = userSlice.actions;

export default userSlice.reducer;