import { IProduct } from "../../types/products";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IProduct[] = [];

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setSortedProducts: (state, { payload }: PayloadAction<IProduct[]>) => {
      state.length = 0;
      state.push(...payload);
    },
  },
});

export const productActions = productSlice.actions;
export const productReducer = productSlice.reducer;
