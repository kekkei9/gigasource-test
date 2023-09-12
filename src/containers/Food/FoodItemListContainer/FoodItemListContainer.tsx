import FoodCard from "../../../components/Cards/Food";
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

type FoodItemListContainerProps = {
  className?: string;
};

const FoodItemListContainer = ({ className }: FoodItemListContainerProps) => {
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
    </div>
  );
};

export default FoodItemListContainer;
