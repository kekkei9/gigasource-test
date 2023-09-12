export type FoodCategory = {
  id: number;
  name: string;
};

export type FoodItem = {
  id: number;
  name: string;
  categoryId: number;
  price: number;
};
