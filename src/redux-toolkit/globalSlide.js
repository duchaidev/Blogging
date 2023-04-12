import { createSlice } from "@reduxjs/toolkit";

const globalSlide = createSlice({
  name: "darkMode",
  initialState: {
    dark: true,
    showNavbar: false,
  },
  reducers: {
    toggleDarkMode: (state) => ({
      ...state,
      dark: !state.dark,
    }),
    toggleNavBar: (state => ({
      ...state,
      showNavbar: !state.showNavbar
    }))
  },
});

export const { toggleDarkMode, toggleNavBar } = globalSlide.actions;
export default globalSlide.reducer;
