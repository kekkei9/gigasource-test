import "./App.css";
import AddFoodFormContainer from "./containers/Food/AddFoodFormContainer";
import CategoryListContainer from "./containers/Food/CategoryListContainer";
import FoodItemListContainer from "./containers/Food/FoodItemListContainer";
import { useAppDispatch } from "./redux/store";
import { useRef } from "react";
import { addCategory } from "./redux/foods/foods.slice";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleAddCategory = () => {
    if (!inputRef.current?.value) return;

    dispatch(addCategory(inputRef.current.value));
    inputRef.current.value = "";
  };

  return (
    <div className="flex">
      <div>
        <CategoryListContainer />

        <input ref={inputRef} />
        <button onClick={handleAddCategory}>add category</button>

        <FoodItemListContainer />
      </div>
      <AddFoodFormContainer />
    </div>
  );
}

export default App;
