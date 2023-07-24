import { configureStore } from "@reduxjs/toolkit";
import { adminReducer } from "../features/admin/admin.slice";
import { userReducer } from "../features/user/user.slice";

export const store = configureStore({
  reducer: { admin: adminReducer, user: userReducer },
});

// Lay RootState va AppDispatch tu store cua chung ta
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
