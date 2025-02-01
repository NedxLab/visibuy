import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState } from "../store";

import { bindActionCreators } from "@reduxjs/toolkit";
import { productActions } from "../services/productSlice";
import { orderActions } from "../services/orderSlice";

export const actions = {
  ...productActions,
  ...orderActions,
};

// Use throughout of application instead of plain `useDispatch` and `useSelector`
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
