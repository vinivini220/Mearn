import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMedicines, addMedicine, updateMedicine, deleteMedicine } from "../api/medicineApi";

export const fetchMedicinesAsync = createAsyncThunk(
  "medicines/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      return await fetchMedicines();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addMedicineAsync = createAsyncThunk(
  "medicines/add",
  async (medicineData, { rejectWithValue }) => {
    try {
      return await addMedicine(medicineData);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateMedicineAsync = createAsyncThunk(
  "medicines/update",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      return await updateMedicine(id, data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteMedicineAsync = createAsyncThunk(
  "medicines/delete",
  async (id, { rejectWithValue }) => {
    try {
      await deleteMedicine(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const medicineSlice = createSlice({
  name: "medicines",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearMedicineError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMedicinesAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMedicinesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchMedicinesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addMedicineAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addMedicineAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addMedicineAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateMedicineAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateMedicineAsync.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.items.findIndex((m) => m._id === action.payload._id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updateMedicineAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteMedicineAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteMedicineAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter((m) => m._id !== action.payload);
      })
      .addCase(deleteMedicineAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearMedicineError } = medicineSlice.actions;
export default medicineSlice.reducer;
