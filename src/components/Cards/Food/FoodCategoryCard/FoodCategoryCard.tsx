import React from "react";
import { FoodCategory } from "../../../../types/Food";
import uniqolor from "uniqolor";

type FoodCategoryCardProps = FoodCategory & {
  onClick: (id: number) => void;
  isSelected: boolean;
};

const FoodCategoryCard = ({
  name,
  id,
  isSelected,
  onClick,
}: FoodCategoryCardProps) => {
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
