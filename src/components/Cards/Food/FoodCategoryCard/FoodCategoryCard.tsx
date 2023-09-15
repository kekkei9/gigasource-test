import React from "react";
import uniqolor from "uniqolor";
import { FoodCategory } from "../../../../rxdb/collections/foodCategories/type";
import { useAppSelector } from "../../../../redux/store";

type FoodCategoryCardProps = FoodCategory & {
  onClick: (id: string) => void;
};

const FoodCategoryCard = ({ name, id, onClick }: FoodCategoryCardProps) => {
  const isSelected = useAppSelector(
    (state) => state.foods.selectedFoodCategories[id]
  );

  console.log("FoodCategoryCard");
  return (
    <div
      className={`rounded-md border p-3 cursor-pointer ${
        isSelected && "border-[0.25rem] border-red-400"
      }`}
      style={{
        backgroundColor: uniqolor.random().color,
      }}
      onClick={() => onClick(id)}
    >
      {name}
    </div>
  );
};

export default React.memo(FoodCategoryCard);
