import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "./slices/notesSlice";

const store = configureStore({
  reducer: {
    notesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
