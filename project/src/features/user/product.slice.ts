import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IProductState {
  productId: string;
  seletedSort: string | null;
  filterPriceGte: string;
  filterPriceLte: string;
}

const initialState: IProductState = {
  productId: "",
  seletedSort: "",
  filterPriceGte: "",
  filterPriceLte: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSeletedSort(state, action) {
      state.seletedSort = action.payload;
    },

    setFilterPriceGte(state, action) {
      state.filterPriceGte = action.payload;
    },

    setFilterPriceLte(state, action) {
      state.filterPriceLte = action.payload;
    },

    startEditProduct: (state, action: PayloadAction<string>) => {
      state.productId = action.payload;
    },
  },
});

export const {
  setSeletedSort,
  setFilterPriceGte,
  setFilterPriceLte,
  startEditProduct,
} = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;
