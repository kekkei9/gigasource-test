import {
  ExtractDocumentTypeFromTypedRxJsonSchema,
  RxCollection,
  toTypedRxJsonSchema,
} from "rxdb";
import { foodItemSchemaLiteral } from "./schema";

const schemaTyped = toTypedRxJsonSchema(foodItemSchemaLiteral);

// aggregate the document type from the schema
export type FoodItem = ExtractDocumentTypeFromTypedRxJsonSchema<
  typeof schemaTyped
>;

export type FoodItemCollection = RxCollection<FoodItem, any, any>;
