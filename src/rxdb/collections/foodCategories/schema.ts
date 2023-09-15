import {
  ExtractDocumentTypeFromTypedRxJsonSchema,
  RxJsonSchema,
  toTypedRxJsonSchema,
} from "rxdb";
import { FoodCategory } from "./type";

export const foodCategorySchemaLiteral = {
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
  },
  required: ["id", "name"],
} as const;

// create the typed RxJsonSchema from the literal typed object.
export const foodCategorySchema: RxJsonSchema<FoodCategory> =
  foodCategorySchemaLiteral;
