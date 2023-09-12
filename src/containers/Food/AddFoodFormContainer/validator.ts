export const AddFoodFormSchema = {
  type: "object",
  required: ["id", "name", "categoryId", "price"],
  properties: {
    id: {
      type: "number",
      minimum: 1,
    },
    name: {
      type: "string",
      minLength: 1,
    },
    categoryId: {
      type: "number",
    },
    price: {
      type: "number",
      minimum: 0,
    },
  },
};
