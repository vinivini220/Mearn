import { createSlice } from "@reduxjs/toolkit";

const medicineSlice = createSlice({
  name: "medicines",
  initialState: { items: [], loading: false, error: null },
  reducers: {
    setMedicines: (state, action) => {
      state.items = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setMedicines, setLoading, setError } = medicineSlice.actions;
export default medicineSlice.reducer;
