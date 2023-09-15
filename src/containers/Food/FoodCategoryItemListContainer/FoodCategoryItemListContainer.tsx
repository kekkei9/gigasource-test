import { useRxData } from "rxdb-hooks";
import FoodCard from "../../../components/Cards/Food";
import { useAppSelector } from "../../../redux/store";
import { useCallback } from "react";
import { FoodCategory } from "../../../rxdb/collections/foodCategories/type";
import { FoodItem } from "../../../rxdb/collections/foodItems/type";
import { useDispatch } from "react-redux";
import { selectFoodItemId } from "../../../redux/foods/foods.slice";

const FoodItemListContainer = ({ categoryId }: { categoryId: string }) => {
  const { result: items } = useRxData<FoodItem>("food_items", (collection) =>
    collection.find().where("categoryId").equals(categoryId)
  );

  const dispatch = useDispatch();

  const handleFoodItemClick = useCallback(
    (id: string) => dispatch(selectFoodItemId(id)),
    [dispatch]
  );
  return (
    <>
      {items.map((item) => (
        <FoodCard.Preview
          {...item._data}
          onClick={handleFoodItemClick}
          key={item.id}
        />
      ))}
    </>
  );
};

type FoodItemListContainerProps = {
  className?: string;
};

const FoodCategoryItemListContainer = ({
  className,
}: FoodItemListContainerProps) => {
  const { result: categories } = useRxData<FoodCategory>(
    "food_categories",
    (collection) => collection.find()
  );

  const currentCategoryId = useAppSelector(
    (state) => state.foods.currentFoodCategoryId
  );

  console.log("FoodCategoryItemListContainer");

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {categories.map((category) => (
        <div
          className={`flex flex-col gap-2 ${
            category.id !== currentCategoryId && "hidden"
          }`}
          key={category.id}
        >
          <FoodItemListContainer categoryId={category.id} />
        </div>
      ))}
    </div>
  );
};

export default FoodCategoryItemListContainer;
