import { FieldValues, useForm } from "react-hook-form";
import { ajvResolver } from "@hookform/resolvers/ajv";
import { AddFoodFormSchema } from "./validator";
import { useAppSelector } from "../../../redux/store";
import { FormEvent, useEffect } from "react";
import { useRxCollection, useRxData } from "rxdb-hooks";
import { FoodCategory } from "../../../rxdb/collections/foodCategories/type";
import { FoodItem } from "../../../rxdb/collections/foodItems/type";

const AddFoodFormContainer = () => {
  const { result: categories } = useRxData<FoodCategory>(
    "food_categories",
    (collection) => collection.find()
  );

  const foodItemCollection = useRxCollection<FoodItem>("food_items");

  const currentFoodItemId = useAppSelector(
    (state) => state.foods.currentFoodItemId
  );
  console.log("AddFoodFormContainer");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    trigger,
    getValues,
  } = useForm({
    resolver: ajvResolver(AddFoodFormSchema as any),
  });

  useEffect(() => {
    const setFormValues = async () => {
      const currentFoodItem = (
        await foodItemCollection
          ?.findOne()
          .where("id")
          .equals(currentFoodItemId)
          .exec()
      )?._data;
      if (!currentFoodItem) return;
      reset(currentFoodItem);
    };
    setFormValues();
  }, [currentFoodItemId, reset, foodItemCollection]);

  const onSubmit = (values: FieldValues) => {
    const { type, name, categoryId, price } = values;
    if (type === "add") {
      foodItemCollection?.insert({
        name,
        categoryId,
        price,
        id: Date.now().toFixed(),
      });
    }
  };

  const handleChange = (e: FormEvent<HTMLFormElement>) => {
    if (!trigger()) return;
    const { type, ...rest } = getValues();
    if (type === "edit") {
      foodItemCollection?.incrementalUpsert({ ...rest, id: currentFoodItemId });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onChange={handleChange}
      className="flex flex-col gap-1"
    >
      <div>Category</div>
      <select {...register("categoryId")}>
        {categories.map(({ id, name }) => (
          <option value={id} key={id}>
            {name}
          </option>
        ))}
      </select>

      <div>ID</div>
      <input type="number" {...register("id")} />
      <div>Name</div>

      <input {...register("name")} />
      <div>Price</div>
      <input
        type="number"
        {...register("price", {
          valueAsNumber: true,
        })}
      />

      <div className="flex gap-3">
        <label htmlFor="add">
          <input {...register("type")} type="radio" value="add" id="add" />
          Add
        </label>
        <label htmlFor="edit">
          <input {...register("type")} type="radio" value="edit" id="edit" />
          Edit
        </label>
      </div>
      <div className="text-red-400">{(errors as any)?.type?.message}</div>
      <button type="submit" className="bg-cyan-300 px-2 py-1 rounded-md mt-2">
        Save/Add
      </button>
    </form>
  );
};

export default AddFoodFormContainer;
