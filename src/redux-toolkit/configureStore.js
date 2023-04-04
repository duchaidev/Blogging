import { configureStore, combineReducers } from "@reduxjs/toolkit";
import globalSlide from "./globalSlide";

const reducer = combineReducers({
  darkMode: globalSlide,
});

const store = configureStore({
  reducer,
});
export default store;
