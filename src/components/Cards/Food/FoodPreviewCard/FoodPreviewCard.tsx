import { FoodItem } from "../../../../types/Food";

type FoodPreviewCardProps = {
  data: FoodItem;
};

const FoodPreviewCard = ({ data }: FoodPreviewCardProps) => {
  return (
    <div className="rounded-md border p-3 active:border-red-400">
      {data.id}.{data.name}
    </div>
  );
};

export default FoodPreviewCard;
