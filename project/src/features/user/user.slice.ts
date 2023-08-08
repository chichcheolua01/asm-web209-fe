import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/user.interface";

export interface IAuthState {
  token: string | null;
  userData: IUser | null;
}

const initialState: IAuthState = {
  token: null,
  userData: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ token: string; userData: IUser }>
    ) => {
      state.token = action.payload.token;
      state.userData = action.payload.userData;
    },
    logOut: (state) => {
      state.token = null;
      state.userData = null;
    },
  },
});

export const { setUser, logOut } = userSlice.actions;
export const userReducer = userSlice.reducer;
