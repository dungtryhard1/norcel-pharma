import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
  labels: string[];
  salePrice: number;
  originalPrice: number;
  haveMarquee: boolean;
}

interface ProductsState {
  items: Product[];
  status: "idle" | "pending" | "success" | "rejected" | null;
}

const initialState: ProductsState = {
  items: [],
  status: null,
};

export const productsFetch = createAsyncThunk<Product[]>(
  "products/productsFetch",
  async () => {
    try {
      const response = await axios.get<Product[]>(
        "http://localhost:5000/products",
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error; //
    }
  },
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productsFetch.pending, (state) => {
        state.status = "pending";
      })
      .addCase(
        productsFetch.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.items = action.payload;
          state.status = "success";
        },
      )
      .addCase(productsFetch.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default productsSlice.reducer;
