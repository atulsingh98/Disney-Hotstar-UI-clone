import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  recommends: null,
  newDisney: null,
  original: null,
  trending: null,
};
const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovie: (state, action) => {
      console.log(action.payload);
      state.recommends = action.payload.recommends;
      state.newDisney = action.payload.newDisney;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
    },
  },
});
export const { setMovie } = movieSlice.actions;

export default movieSlice.reducer;
