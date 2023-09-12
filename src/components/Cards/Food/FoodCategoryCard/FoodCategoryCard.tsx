import React from "react";
import { FoodCategory } from "../../../../types/Food";
import uniqolor from "uniqolor";

const FoodCategoryCard = ({ name, id }: FoodCategory) => {
  console.log("FoodCategoryCard");
  return (
    <div
      className="rounded-md border p-3 active:border-red-400"
      style={{
        backgroundColor: uniqolor(id).color,
      }}
    >
      {name}
    </div>
  );
};

export default React.memo(FoodCategoryCard);
