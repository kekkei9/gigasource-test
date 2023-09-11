import React from "react";
import { FoodCategory } from "../../../../types/Food";

type FoodCategoryCardProps = {
  data: FoodCategory;
};

const FoodCategoryCard = ({ data }: FoodCategoryCardProps) => {
  console.log("FoodCategoryCard");
  return (
    <div className="rounded-md border p-3 active:border-red-400">
      {data.name}
    </div>
  );
};

export default React.memo(FoodCategoryCard);
