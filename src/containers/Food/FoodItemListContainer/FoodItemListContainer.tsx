import FoodCard from "../../../components/Cards/Food";
import { useAppSelector } from "../../../redux/store";

const FoodItemListContainer = () => {
  const { items, categories } = useAppSelector((state) => state.foods);

  return (
    <div>
      {categories.map(({ id, name }) => (
        <div className="flex gap-2" key={id}>
          <div>{name}</div>
          {items
            .filter((item) => item.categoryId === id)
            .map((item) => (
              <FoodCard.Preview data={item} key={item.id} />
            ))}
        </div>
      ))}
    </div>
  );
};

export default FoodItemListContainer;
