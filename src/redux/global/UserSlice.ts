import { createSlice } from '@reduxjs/toolkit';

export type User = {
  id: string;
  name: string;
  email: string;
};

export interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null, // Initial state for user
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
