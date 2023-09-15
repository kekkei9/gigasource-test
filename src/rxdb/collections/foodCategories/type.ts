import {
  ExtractDocumentTypeFromTypedRxJsonSchema,
  RxCollection,
  RxJsonSchema,
  toTypedRxJsonSchema,
} from "rxdb";
import { foodCategorySchemaLiteral } from "./schema";

const schemaTyped = toTypedRxJsonSchema(foodCategorySchemaLiteral);

// aggregate the document type from the schema
export type FoodCategory = ExtractDocumentTypeFromTypedRxJsonSchema<
  typeof schemaTyped
>;

// create the typed RxJsonSchema from the literal typed object.
export const foodCategorySchema: RxJsonSchema<FoodCategory> =
  foodCategorySchemaLiteral;

export type FoodCategoryCollection = RxCollection<FoodCategory, any, any>;
