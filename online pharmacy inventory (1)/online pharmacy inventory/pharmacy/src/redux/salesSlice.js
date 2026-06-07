import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSales, createSale } from "../api/salesApi";

export const fetchSalesAsync = createAsyncThunk(
  "sales/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      return await fetchSales();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createSaleAsync = createAsyncThunk(
  "sales/create",
  async (saleData, { rejectWithValue }) => {
    try {
      return await createSale(saleData);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const salesSlice = createSlice({
  name: "sales",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearSalesError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSalesAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSalesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchSalesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createSaleAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createSaleAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(createSaleAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSalesError } = salesSlice.actions;
export default salesSlice.reducer;
