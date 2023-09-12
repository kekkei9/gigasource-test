import { useMemo } from "react";
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
      <div className="flex gap-2" key={id}>
        <div>{name}</div>
        {items
          .filter((item) => item.categoryId === id)
          .map((item) => (
            <FoodCard.Preview {...item} key={item.id} />
          ))}
      </div>
    );
  },
  (prevProps, nextProps) =>
    JSON.stringify(prevProps.items) === JSON.stringify(nextProps.items)
);

const FoodItemListContainer = () => {
  const { items, categories } = useAppSelector((state) => state.foods);

  return (
    <div>
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
