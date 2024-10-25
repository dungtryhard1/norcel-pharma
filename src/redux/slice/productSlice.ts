import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../data/products";

interface CartItem extends Product {
  quantity: number;
}

interface ProductState {
  cart: CartItem[];
}

const initialState: ProductState = {
  cart: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const existingProduct = state.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
  },
});

export const { addToCart } = productSlice.actions;
export default productSlice.reducer;
