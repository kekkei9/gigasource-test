import { createSlice } from "@reduxjs/toolkit";
import { FoodsState } from "./type";

const initialState: FoodsState = {
  categories: [],
  items: [],
};

const foodsState = createSlice({
  name: "bindingForm",
  initialState,
  reducers: {},
});

export const {} = foodsState.actions;

export default foodsState.reducer;
