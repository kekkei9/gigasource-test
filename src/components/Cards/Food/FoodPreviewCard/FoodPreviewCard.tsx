import React from "react";
import { FoodItem } from "../../../../types/Food";

const FoodPreviewCard = ({ id, name }: FoodItem) => {
  console.log("FoodPreviewCard");
  return (
    <div className="rounded-md border p-3 active:border-red-400">
      {id}.{name}
    </div>
  );
};

export default React.memo(FoodPreviewCard);
