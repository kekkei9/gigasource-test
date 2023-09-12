import { useCallback } from "react";
import FoodCard from "../../../components/Cards/Food";
import { selectCategoryId } from "../../../redux/foods/foods.slice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";

const CategoryListContainer = () => {
  const categories = useAppSelector((state) => state.foods.categories);
  const currentCategoryId = useAppSelector(
    (state) => state.foods.currentCategoryId
  );

  const dispatch = useAppDispatch();
  console.log("CategoryListContainer");

  const handleCategoryCardClick = useCallback(
    (id: number) => dispatch(selectCategoryId(id)),
    [dispatch]
  );

  return (
    <div className="flex gap-2">
      {categories.map((category) => (
        <FoodCard.Category
          {...category}
          key={category.id}
          onClick={handleCategoryCardClick}
          isSelected={currentCategoryId === category.id}
        />
      ))}
    </div>
  );
};

export default CategoryListContainer;
