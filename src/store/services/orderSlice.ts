import { IProduct } from "../../types/products";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IProduct[] = [];

const orderSlice = createSlice({
  name: "orderSlice",
  initialState,
  reducers: {
    setOrders: (state, { payload }: PayloadAction<IProduct[]>) => {
      return { ...state, payload };
    },
  },
});

export const orderActions = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
