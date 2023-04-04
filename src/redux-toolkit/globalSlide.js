import { createSlice } from "@reduxjs/toolkit";

const globalSlide = createSlice({
  name: "darkMode",
  initialState: {
    dark: true,
  },
  reducers: {
    toggleDarkMode: (state) => ({
      ...state,
      dark: !state.dark,
    }),
  },
});

export const { toggleDarkMode } = globalSlide.actions;
export default globalSlide.reducer;
