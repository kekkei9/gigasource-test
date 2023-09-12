import React from "react";
import { FoodItem } from "../../../../types/Food";
import uniqolor from "uniqolor";

const FoodPreviewCard = ({ id, name, categoryId }: FoodItem) => {
  console.log("FoodPreviewCard");
  return (
    <div
      className="rounded-md border p-3 active:border-red-400"
      style={{
        backgroundColor: uniqolor(categoryId).color,
      }}
    >
      {id}.{name}
    </div>
  );
};

export default React.memo(FoodPreviewCard);
