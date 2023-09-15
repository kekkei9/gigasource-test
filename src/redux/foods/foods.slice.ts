import { createSlice } from "@reduxjs/toolkit";
import { FoodsState } from "./type";

const initialState: FoodsState = {
  currentFoodItemId: "",
  currentFoodCategoryId: "",
  selectedFoodCategories: {},
  selectedFoodItems: {},
};

const foodsState = createSlice({
  name: "bindingForm",
  initialState,
  reducers: {
    selectCategoryId: (state, action) => {
      state.selectedFoodCategories[state.currentFoodCategoryId] = false;
      state.selectedFoodCategories[action.payload] = true;
      state.currentFoodCategoryId = action.payload;
    },
    selectFoodItemId: (state, action) => {
      state.selectedFoodItems[state.currentFoodItemId] = false;
      state.selectedFoodItems[action.payload] = true;
      state.currentFoodItemId = action.payload;
    },
  },
});

export const { selectCategoryId, selectFoodItemId } = foodsState.actions;

export default foodsState.reducer;
