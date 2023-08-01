import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../interfaces/product.interface";

export interface ICartState {
  isDisplay: boolean;
  cartProducts: IProduct[];
}

export const initialState: ICartState = {
  isDisplay: false,
  cartProducts: [],
};

const cartSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    displayCart: (state) => {
      state.isDisplay = !state.isDisplay;
    },
  },
});

export const { displayCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
export default cartReducer;
