import { createSlice } from "@reduxjs/toolkit";

const globalSlide = createSlice({
  name: "darkMode",
  initialState: {
    dark: true,
    showNavbar: false,
    showSearch: false,
  },
  reducers: {
    toggleDarkMode: (state) => ({
      ...state,
      dark: !state.dark,
    }),
    toggleNavBar: (state => ({
      ...state,
      showNavbar: !state.showNavbar
    })),
    toggleSearch: (state => ({
      ...state,
      showSearch: !state.showSearch
    }))
  },
});

export const { toggleDarkMode, toggleNavBar, toggleSearch } = globalSlide.actions;
export default globalSlide.reducer;
