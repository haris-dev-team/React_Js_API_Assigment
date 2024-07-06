import { createSlice } from "@reduxjs/toolkit";

const initialized_App = {
  isloggedin: false,
  loading: true,
};

const UserSlices = createSlice({
  name: "issloggedin_Checked",
  initialState: initialized_App,
  reducers: {
    loading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { loading } = UserSlices.actions;

export default UserSlices.reducer;
