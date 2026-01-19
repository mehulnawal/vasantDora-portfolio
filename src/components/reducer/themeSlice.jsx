import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isDark: localStorage.getItem('vasant_theme') === 'light'
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.isDark = !state.isDark;
            localStorage.setItem('vasant_theme', state.isDark ? 'dark' : 'light');
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;