import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    resetSearch: (state) => {
      state.search = null;
    },
  },
});

export const { setSearch, resetSearch } = searchSlice.actions;
export const selectSearch = (state) => state.search.search;

export default searchSlice.reducer;
