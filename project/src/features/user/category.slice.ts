import { createSlice } from "@reduxjs/toolkit";

interface ICateState {
  categoryId: string;
}
export const initialState: ICateState = {
  categoryId: "",
}

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
});

export const { } = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
export default categoryReducer;
