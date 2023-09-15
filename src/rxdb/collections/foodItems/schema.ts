import {
  ExtractDocumentTypeFromTypedRxJsonSchema,
  RxJsonSchema,
  toTypedRxJsonSchema,
} from "rxdb";
import { FoodItem } from "./type";

export const foodItemSchemaLiteral = {
  version: 0,
  primaryKey: "id",
  type: "object",
  properties: {
    id: {
      type: "string",
      maxLength: 100,
    },
    name: {
      type: "string",
    },
    categoryId: {
      type: "number",
      minimum: 1,
    },
    price: {
      type: "number",
      minimum: 1,
    },
  },
  required: ["id", "name", "categoryId", "price"],
} as const;

// create the typed RxJsonSchema from the literal typed object.
export const foodItemSchema: RxJsonSchema<FoodItem> = foodItemSchemaLiteral;
