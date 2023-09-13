import React from "react";
import { FoodItem } from "../../../../types/Food";
import uniqolor from "uniqolor";

type FoodPreviewCardProps = FoodItem & {
  onClick: (id: number) => void;
  isSelected: boolean;
};

const FoodPreviewCard = ({
  id,
  name,
  categoryId,
  isSelected,
  onClick,
}: FoodPreviewCardProps) => {
  console.log("FoodPreviewCard");
  return (
    <div
      className={`rounded-md border p-3 active:border-red-400 ${
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
