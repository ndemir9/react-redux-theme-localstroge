import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: JSON.parse(localStorage.getItem("theme")) || "light",
  language: JSON.parse(localStorage.getItem("language")) || "tr",
};

const settingsSlice = createSlice({
  name: "settingsSlice",
  initialState,
  reducers: {
    changeTheme: (state) => {
      if (state.theme == "light") {
        state.theme = "dark";
        localStorage.setItem("theme", JSON.stringify(state.theme));
      } else if (state.theme == "dark") {
        state.theme = "light";
        localStorage.setItem("theme", JSON.stringify(state.theme));
      }
    },
    changeLanguage: (state) => {
      if (state.language == "tr") {
        state.language = "en";
        localStorage.setItem("language", JSON.stringify(state.language));
      } else if (state.language == "en") {
        state.language = "tr";
        localStorage.setItem("language", JSON.stringify(state.language));
      }
    },
  },
});

export const { changeTheme, changeLanguage } = settingsSlice.actions;

export default settingsSlice.reducer;
