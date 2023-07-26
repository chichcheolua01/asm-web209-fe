import { configureStore } from "@reduxjs/toolkit";
import { adminReducer } from "../features/admin/admin.slice";
import { userReducer } from "../features/user/user.slice";
import { productApi } from "../features/user/product.services";
import productReducer from "../features/user/product.slice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    [productApi.reducerPath]: productApi.reducer, //reducer duoc tao tu api slice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

// Lay RootState va AppDispatch tu store cua chung ta
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
