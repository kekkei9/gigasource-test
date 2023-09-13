import { useMemo } from "react";
import FoodCard from "../../../components/Cards/Food";
<<<<<<< Updated upstream
import { useAppSelector } from "../../../redux/store";
import { FoodCategory, FoodItem } from "../../../types/Food";
import React from "react";

const CategoryFoodItemList = React.memo(
  ({
    category: { id, name },
    items,
  }: {
    category: FoodCategory;
    items: FoodItem[];
  }) => {
    console.log("CategoryFoodItemList");
    return (
      <div className="flex gap-4 items-center" key={id}>
        <div className="text-white">{name}</div>
        <div className="overflow-x-auto flex gap-2">
          {items
            .filter((item) => item.categoryId === id)
            .map((item) => (
              <FoodCard.Preview {...item} key={item.id} />
            ))}
        </div>
      </div>
    );
  },
  (prevProps, nextProps) =>
    JSON.stringify(prevProps.items) === JSON.stringify(nextProps.items)
);
=======
import { selectFoodItemId } from "../../../redux/foods/foods.slice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { useCallback } from "react";
import { FoodItem } from "../../../types/Food";

type FoodItemWrapperProps = FoodItem & {
  onClick: (id: number) => void;
};

const FoodItemWrapper = (props: FoodItemWrapperProps) => {
  const currentFoodItemId = useAppSelector(
    (state) => state.foods.currentFoodItemId
  );

  return (
    <FoodCard.Preview {...props} isSelected={currentFoodItemId === props.id} />
  );
};
>>>>>>> Stashed changes

type FoodItemListContainerProps = {
  className?: string;
};

const FoodItemListContainer = ({ className }: FoodItemListContainerProps) => {
<<<<<<< Updated upstream
  const { items, categories } = useAppSelector((state) => state.foods);

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {categories.map((category) => {
        return (
          <CategoryFoodItemList
            category={category}
            items={items.filter((item) => item.categoryId === category.id)}
            key={category.id}
          />
        );
      })}
=======
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
              <FoodItemWrapper
                {...item}
                onClick={handleFoodItemClick}
                key={item.id}
              />
            ))}
        </div>
      ))}
>>>>>>> Stashed changes
    </div>
  );
};

export default FoodItemListContainer;
