import React from "react";
import { FoodItem } from "../../../../types/Food";
import uniqolor from "uniqolor";
import { useAppSelector } from "../../../../redux/store";

type FoodPreviewCardProps = FoodItem & {
  onClick: (id: number) => void;
};

const FoodPreviewCard = ({ id, name, onClick }: FoodPreviewCardProps) => {
  const isSelected = useAppSelector((state) => state.foods.selectedList[id]);
  console.log("FoodPreviewCard");

  return (
    <div
      className={`rounded-md border p-3 ${
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
