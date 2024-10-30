import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import cartReducer from "../slice/cartSlice";
import productsReducer, { productsFetch } from "../slice/productsSlice";
import { productsApi } from "../slice/productApi";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    products: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());

export type RootState = ReturnType<typeof store.getState>;

export default store;
