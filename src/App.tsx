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
  console.log("App rerendered");

  return (
    <div className="flex w-screen justify-between">
      <div>
        <CategoryListContainer />

        <FoodItemListContainer className="mt-6" />
      </div>
      <div className="bg-white h-screen p-6">
        <div className="flex flex-col gap-2">
          <div className="font-bold mb-4">Add Food Category</div>

          <input ref={inputRef} />
          <button
            onClick={handleAddCategory}
            className="bg-cyan-300 px-2 py-1 rounded-md"
          >
            Add category
          </button>
        </div>
        <div className="font-bold my-4">Add Food Item</div>
        <AddFoodFormContainer />
      </div>
    </div>
  );
}

export default App;
