import React from "react";
import { FoodItem } from "../../../../types/Food";
import uniqolor from "uniqolor";

type FoodPreviewCardProps = FoodItem & {
  onClick: (id: number) => void;
};

const FoodPreviewCard = ({
  id,
  name,
  onClick,
  categoryId,
}: FoodPreviewCardProps) => {
  console.log("FoodPreviewCard");

  return (
    <div
      className="food-preview-card"
      style={{
        backgroundColor: uniqolor.random().color,
      }}
    >
      <input type="radio" name="fooditem" onClick={() => onClick(id)} />
      <div className="checkmark">
        {id}.{name}
      </div>
    </div>
  );
};

export default React.memo(FoodPreviewCard);
