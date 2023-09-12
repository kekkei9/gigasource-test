import { useForm } from "react-hook-form";
import { ajvResolver } from "@hookform/resolvers/ajv";
import { AddFoodFormSchema } from "./validator";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { addFoodItem } from "../../../redux/foods/foods.slice";

const AddFoodFormContainer = () => {
  const categories = useAppSelector((state) => state.foods.categories);
  console.log("AddFoodFormContainer");

  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm({
    resolver: ajvResolver(AddFoodFormSchema as any),
  });

  const onSubmit = (values: any) => {
    dispatch(addFoodItem(values));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
      <div>Category</div>
      <select
        {...register("categoryId", {
          valueAsNumber: true,
        })}
      >
        {categories.map(({ id, name }) => (
          <option value={id} key={id}>
            {name}
          </option>
        ))}
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
      <button type="submit" className="bg-cyan-300 px-2 py-1 rounded-md mt-2">
        Submit
      </button>
    </form>
  );
};

export default AddFoodFormContainer;
