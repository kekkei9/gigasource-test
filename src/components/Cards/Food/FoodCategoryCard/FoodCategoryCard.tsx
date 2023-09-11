import { FoodCategory } from "../../../../types/Food";

type FoodCategoryCardProps = {
  data: FoodCategory;
};

const FoodCategoryCard = ({ data }: FoodCategoryCardProps) => {
  return (
    <div className="rounded-md border p-3 active:border-red-400">
      {data.name}
    </div>
  );
};

export default FoodCategoryCard;
