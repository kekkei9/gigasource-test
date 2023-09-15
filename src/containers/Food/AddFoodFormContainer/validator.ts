export const AddFoodFormSchema = {
  type: "object",
  required: ["id", "name", "categoryId", "price"],
  properties: {
    id: {
      type: "string",
      minLength: 1,
      maxLength: 100,
    },
    name: {
      type: "string",
      minLength: 1,
    },
    categoryId: {
      type: "string",
    },
    price: {
      type: "number",
      minimum: 0,
    },
    type: {
      type: "string",
      enum: ["edit", "add"],
    },
  },
};
