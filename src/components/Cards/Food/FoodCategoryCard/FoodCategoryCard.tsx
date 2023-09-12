import React from "react";
import { FoodCategory } from "../../../../types/Food";

const FoodCategoryCard = ({ name }: FoodCategory) => {
  console.log("FoodCategoryCard");
  return (
    <div className="rounded-md border p-3 active:border-red-400">{name}</div>
  );
};

export default React.memo(FoodCategoryCard);
