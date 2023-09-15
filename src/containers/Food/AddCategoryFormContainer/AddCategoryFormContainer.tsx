import { useRef } from "react";
import { useRxCollection } from "rxdb-hooks";
import { FoodCategory } from "../../../rxdb/collections/foodCategories/type";

const AddCategoryFormContainer = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const categoriesCollection = useRxCollection<FoodCategory>("food_categories");
  const handleAddCategory = () => {
    if (!inputRef.current?.value) return;

    categoriesCollection?.insert({
      id: Date.now().toFixed(),
      name: inputRef.current.value,
    });
    // dispatch(addCategory(inputRef.current.value));
    inputRef.current.value = "";
  };
  return (
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
  );
};

export default AddCategoryFormContainer;
