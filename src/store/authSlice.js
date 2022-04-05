import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    logout: (state, action) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
