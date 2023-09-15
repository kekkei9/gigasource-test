export type FoodsState = {
  currentFoodItemId: string;
  currentFoodCategoryId: string;
  selectedFoodCategories: Record<string, boolean>;
  selectedFoodItems: Record<string, boolean>;
};
