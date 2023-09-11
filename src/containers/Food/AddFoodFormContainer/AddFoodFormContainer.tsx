import { useForm } from "react-hook-form";
import { ajvResolver } from "@hookform/resolvers/ajv";
import { AddFoodFormSchema } from "./validator";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { addFoodItem } from "../../../redux/foods/foods.slice";

const AddFoodFormContainer = () => {
  const categories = useAppSelector((state) => state.foods.categories);

  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm({
    resolver: ajvResolver(AddFoodFormSchema as any),
  });

  const onSubmit = (values: any) => {
    dispatch(addFoodItem(values));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
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

      <input
        type="number"
        {...register("id", {
          valueAsNumber: true,
        })}
      />
      <input {...register("name")} />
      <input
        type="number"
        {...register("price", {
          valueAsNumber: true,
        })}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddFoodFormContainer;
