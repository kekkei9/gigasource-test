import FoodCard from "../../../components/Cards/Food";
import { useAppSelector } from "../../../redux/store";

const CategoryListContainer = () => {
  const categories = useAppSelector((state) => state.foods.categories);
  console.log("CategoryListContainer");

  return (
    <div className="flex gap-2">
      {categories.map((category) => (
        <FoodCard.Category {...category} key={category.id} />
      ))}
    </div>
  );
};

export default CategoryListContainer;
