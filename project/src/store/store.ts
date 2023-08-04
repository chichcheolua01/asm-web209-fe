import { configureStore } from "@reduxjs/toolkit";
import { adminReducer } from "../features/admin/admin.slice";
import { userReducer } from "../features/user/user.slice";
import { categoryReducer } from "../features/user/category.slice";
import { productApi } from "../features/user/product.services";
import productReducer from "../features/user/product.slice";
import { categoryApi } from "../features/user/category.services";
import cartReducer from "../features/user/cart.slice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    [productApi.reducerPath]: productApi.reducer, 
    category: categoryReducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(categoryApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
