export const AddFoodFormSchema = {
  type: "object",
  required: ["id", "name", "category", "price"],
  properties: {
    id: {
      type: "number",
      minimum: 1,
    },
    name: {
      type: "string",
      minLength: 1,
    },
    category: {
      type: "number",
    },
    price: {
      type: "number",
      minimum: 0,
    },
  },
};
