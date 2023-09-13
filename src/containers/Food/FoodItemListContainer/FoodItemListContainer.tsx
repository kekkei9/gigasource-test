import FoodCard from "../../../components/Cards/Food";
import { selectFoodItemId } from "../../../redux/foods/foods.slice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { useCallback } from "react";

type FoodItemListContainerProps = {
  className?: string;
};

const FoodItemListContainer = ({ className }: FoodItemListContainerProps) => {
  const categories = useAppSelector((state) => state.foods.categories);
  const items = useAppSelector((state) => state.foods.items);
  const currentCategoryId = useAppSelector(
    (state) => state.foods.currentCategoryId
  );

  const dispatch = useAppDispatch();

  const handleFoodItemClick = useCallback(
    (id: number) => dispatch(selectFoodItemId(id)),
    [dispatch]
  );
  console.log("FoodItemListContainer");

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {categories.map((category) => (
        <div
          className={`flex flex-col gap-2 ${
            category.id !== currentCategoryId && "hidden"
          }`}
          key={category.id}
        >
          {items
            .filter((item) => item.categoryId === category.id)
            .map((item) => (
              <FoodCard.Preview
                {...item}
                onClick={handleFoodItemClick}
                key={item.id}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default FoodItemListContainer;
