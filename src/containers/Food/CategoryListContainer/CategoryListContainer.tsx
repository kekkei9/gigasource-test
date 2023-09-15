import { useCallback } from "react";
import FoodCard from "../../../components/Cards/Food";
import { useAppDispatch } from "../../../redux/store";
import { useRxData } from "rxdb-hooks";
import { FoodCategory } from "../../../rxdb/collections/foodCategories/type";
import { selectCategoryId } from "../../../redux/foods/foods.slice";

const CategoryListContainer = () => {
  const { result: categories } = useRxData<FoodCategory>(
    "food_categories",
    (collection) => collection.find()
  );

  const dispatch = useAppDispatch();

  console.log("CategoryListContainer");

  const handleCategoryCardClick = useCallback(
    (id: string) => {
      dispatch(selectCategoryId(id));
    },
    [dispatch]
  );

  return (
    <div className="flex gap-2">
      {categories.map((category) => (
        <FoodCard.Category
          {...category._data}
          key={category.id}
          onClick={handleCategoryCardClick}
        />
      ))}
    </div>
  );
};

export default CategoryListContainer;
