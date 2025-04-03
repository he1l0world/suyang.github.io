import { createSlice } from '@reduxjs/toolkit';

export type ThemeType = 'system' | 'light' | 'dark';

export type User = {
  id: string;
  name: string;
  email: string;
};

export interface GlobalState {
  user: User | null;
  theme: ThemeType;
}

const initialState: GlobalState = {
  user: null, // Initial state for user
  theme: 'system', // Initial state for theme
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setUser, clearUser, setTheme } = globalSlice.actions;
export default globalSlice;
