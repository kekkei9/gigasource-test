import { MyDatabase } from "..";
import foodsData from "./data/foods.json";

export const seedData = async (db: MyDatabase) => {
  await db.collections.food_items.bulkUpsert(foodsData.items);
  await db.collections.food_categories.bulkUpsert(foodsData.categories);
};
