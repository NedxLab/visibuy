import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./services/productSlice";
import { orderReducer } from "./services/orderSlice";

export const store = () =>
  configureStore({
    reducer: {
      products: productReducer,
      orders: orderReducer,
    },
  });

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
