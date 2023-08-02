import { createSlice, current } from "@reduxjs/toolkit";
import { IProduct } from "../../interfaces/product.interface";

export interface ICartState {
  isDisplay: boolean;
  cartProducts: IProduct[];
}

export const initialState: ICartState = {
  isDisplay: false,
  cartProducts: [],
};

const watchState = (state: ICartState) => {
  localStorage.removeItem("cart");
  localStorage.setItem("cart", JSON.stringify(state.cartProducts));
};

const cartSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    displayCart: (state) => {
      state.isDisplay = !state.isDisplay;
    },
    addToCart: (state, action) => {
      const existedIndex = state.cartProducts.findIndex(
        (item) => item._id === action.payload._id
      );
      if (existedIndex === -1) {
        state.cartProducts.push(action.payload);
        watchState(state);
      } else {
        state.cartProducts[existedIndex].quantity += 1;
        watchState(state);
      }
    },
    removeProductFromCart: (state, action) => {
      const existedIndex = state.cartProducts.findIndex(
        (item) => item._id === action.payload._id
      );
      if (state.cartProducts[existedIndex].quantity > 1) {
        state.cartProducts[existedIndex].quantity -= 1;
        watchState(state);
      } else {
        if (window.confirm("Xoa that ha?") == true) {
          state.cartProducts.splice(existedIndex, 1);
          watchState(state);
        }
      }
    },
  },
});

export const { displayCart, addToCart, removeProductFromCart } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
export default cartReducer;
