import { createSlice } from '@reduxjs/toolkit';

export const ThemeTypeOptions = {
  System: 'system',
  Light: 'light',
  Dark: 'dark',
};

export type ThemeType =
  (typeof ThemeTypeOptions)[keyof typeof ThemeTypeOptions];

export interface ThemeState {
  theme: ThemeType;
}

const initialState: ThemeState = {
  theme: ThemeTypeOptions.System, // Initial state for theme
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
