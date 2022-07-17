import { configureStore } from "@reduxjs/toolkit";

import settingsSlice from "./settingsSlice";

const store = configureStore({
  reducer: {
    settingsSlice,
  },
});

export default store;
