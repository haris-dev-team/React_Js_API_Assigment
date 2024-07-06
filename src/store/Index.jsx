import { configureStore } from "@reduxjs/toolkit";
import UserSlices from "./slices/UserSlices";

export const store = configureStore({
  reducer: {
    issloggedin_Checked:UserSlices
  },
});
