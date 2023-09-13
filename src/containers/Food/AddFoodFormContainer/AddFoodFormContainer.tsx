import { useForm } from "react-hook-form";
import { ajvResolver } from "@hookform/resolvers/ajv";
import { AddFoodFormSchema } from "./validator";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { addFoodItem, editFoodItem } from "../../../redux/foods/foods.slice";
import { useEffect, useMemo } from "react";

const AddFoodFormContainer = () => {
  const categories = useAppSelector((state) => state.foods.categories);
  const items = useAppSelector((state) => state.foods.items);
  const currentFoodItemId = useAppSelector(
    (state) => state.foods.currentFoodItemId
  );
  console.log("AddFoodFormContainer");

  const dispatch = useAppDispatch();

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
    reset(items.find((item) => item.id === currentFoodItemId));
  }, [currentFoodItemId, reset]);

  const categoryOptions = useMemo(
    () => (
      <>
        {categories.map(({ id, name }) => (
          <option value={id} key={id}>
            {name}
          </option>
        ))}
      </>
    ),
    [categories]
  );

  const onSubmit = (values: any) => {
    const { type, ...rest } = values;
    if (type === "add") {
      dispatch(addFoodItem(rest));
    }
  };

  const handleChange = (e: any) => {
    if (!trigger()) return;
    const { type, ...rest } = getValues();
    if (type === "edit") {
      dispatch(editFoodItem(rest));
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onChange={handleChange}
      className="flex flex-col gap-1"
    >
      <div>Category</div>
      <select
        {...register("categoryId", {
          valueAsNumber: true,
        })}
      >
        {categoryOptions}
      </select>

      <div>ID</div>
      <input
        type="number"
        {...register("id", {
          valueAsNumber: true,
        })}
      />
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
