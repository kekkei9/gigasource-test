import { FoodCategory, FoodItem } from "../../types/Food";

export type FoodsState = {
  categories: FoodCategory[];
  items: FoodItem[];
  currentCategoryId: number;
  currentFoodItemId: number;
  selectedList: Record<number, boolean>;
};
