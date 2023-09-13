import { FoodCategory, FoodItem } from "../../types/Food";

export type FoodsState = {
  categories: FoodCategory[];
  items: FoodItem[];
  currentCategoryId: number;
  currentFoodItemId: number;
};
