import { MyDatabase } from "..";

export const addHooks = (db: MyDatabase) => {
  db.collections.food_items.preInsert((docObj: any) => {
    const { id } = docObj;
    return db.collections.food_items
      .findOne({
        selector: { id },
      })
      .exec()
      .then((has: any) => {
        if (has !== null) {
          console.error("another food item already has the id " + id);
          throw new Error("id already there");
        }
        return db;
      });
  }, true);

  db.collections.food_categories.preInsert((docObj: any) => {
    const { id } = docObj;
    return db.collections.food_categories
      .findOne({
        selector: { id },
      })
      .exec()
      .then((has: any) => {
        if (has !== null) {
          console.error("another food category already has the id " + id);
          throw new Error("id already there");
        }
        return db;
      });
  }, true);
};
