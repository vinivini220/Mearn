import { createSlice } from "@reduxjs/toolkit";

const salesSlice = createSlice({
  name: "sales",
  initialState: { records: [], loading: false, error: null },
  reducers: {
    setSales: (state, action) => {
      state.records = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setSales, setLoading, setError } = salesSlice.actions;
export default salesSlice.reducer;
