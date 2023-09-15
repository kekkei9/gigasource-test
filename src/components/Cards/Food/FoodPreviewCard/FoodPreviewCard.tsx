import React from "react";
import uniqolor from "uniqolor";
import { useAppSelector } from "../../../../redux/store";
import { FoodItem } from "../../../../rxdb/collections/foodItems/type";

type FoodPreviewCardProps = FoodItem & {
  onClick: (id: string) => void;
};

const FoodPreviewCard = ({ id, name, onClick }: FoodPreviewCardProps) => {
  const isSelected = useAppSelector(
    (state) => state.foods.selectedFoodItems[id]
  );
  console.log("FoodPreviewCard");

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
      {id}.{name}
    </div>
  );
};

export default React.memo(FoodPreviewCard);
