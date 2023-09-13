import { createSlice } from "@reduxjs/toolkit";
import { FoodsState } from "./type";
import foodData from "../../constants/data/foods.json";

const initialState: FoodsState = {
  categories: foodData.categories,
  items: foodData.items,
  currentCategoryId: foodData.categories[0].id,
  currentFoodItemId: foodData.items[0].id,
  selectedList: foodData.items.reduce((prev: Record<number, boolean>, curr) => {
    prev[curr.id] = curr.id === 1;
    return prev;
  }, {}),
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
        ...action.payload,
        id: state.items.length + 1,
      });
    },
    editFoodItem: (state, action) => {
      const { id, ...rest } = action.payload;
      if (state.items.findIndex((item) => item.id === id) === -1) return;
      state.items.forEach((item, index) => {
        if (item.id === id) {
          state.items[index] = { ...state.items[index], ...rest };
        }
      });
    },
    selectCategoryId: (state, action) => {
      state.currentCategoryId = action.payload;
    },
    selectFoodItemId: (state, action) => {
      state.selectedList[state.currentFoodItemId] = false;
      state.selectedList[action.payload] = true;
      state.currentFoodItemId = action.payload;
    },
  },
});

export const {
  addCategory,
  addFoodItem,
  editFoodItem,
  selectCategoryId,
  selectFoodItemId,
} = foodsState.actions;

export default foodsState.reducer;
