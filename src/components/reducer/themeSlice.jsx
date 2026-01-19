import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLight: localStorage.getItem('vasant_theme') === 'light'
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.isLight = !state.isLight;
            localStorage.setItem('vasant_theme', state.isDisLight ? 'dark' : 'light');
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;