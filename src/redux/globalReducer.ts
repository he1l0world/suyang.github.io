import { createSlice } from '@reduxjs/toolkit';

type themeType = 'light' | 'dark';
type User = {
    id: string;
    name: string;
    email: string;
};

export interface GlobalState {
    user: User | null;
    theme: themeType;
}

const initialState: GlobalState = {
    user: null, // Initial state for user
    theme: 'light', // Initial state for theme
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
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
    },
});

export const { setUser, clearUser, toggleTheme } = globalSlice.actions;
export default globalSlice;
