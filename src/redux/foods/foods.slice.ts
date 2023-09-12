import { createSlice } from "@reduxjs/toolkit";
import { FoodsState } from "./type";
import foodData from "../../constants/data/foods.json";

const initialState: FoodsState = {
  categories: foodData.categories,
  items: foodData.items,
  currentCategoryId: 1,
  currentFoodItemId: 1,
};

const foodsState = createSlice({
  name: "bindingForm",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categories.push({
        id: state.categories.length + 1,
        name: action.payload,
      });
    },
    addFoodItem: (state, action) => {
      state.items.push({
        id: state.items.length + 1,
        ...action.payload,
      });
    },
  },
});

export const { addCategory, addFoodItem } = foodsState.actions;

export default foodsState.reducer;
