import { RxDatabase, addRxPlugin, createRxDatabase } from "rxdb";
import { RxDBDevModePlugin } from "rxdb/plugins/dev-mode";
import { getRxStorageDexie } from "rxdb/plugins/storage-dexie";
import { seedData } from "./seed";
import { addHooks } from "./hooks";
import { foodItemSchema } from "./collections/foodItems/schema";
import { foodCategorySchema } from "./collections/foodCategories/schema";
import { FoodItemCollection } from "./collections/foodItems/type";
import { FoodCategoryCollection } from "./collections/foodCategories/type";
import { RxDBLeaderElectionPlugin } from "rxdb/plugins/leader-election";
import { RxDBQueryBuilderPlugin } from "rxdb/plugins/query-builder";
import { RxDBCleanupPlugin } from "rxdb/plugins/cleanup";
import { observeNewCollections } from "rxdb-hooks";

addRxPlugin(observeNewCollections);
addRxPlugin(RxDBCleanupPlugin);
addRxPlugin(RxDBQueryBuilderPlugin);
addRxPlugin(RxDBLeaderElectionPlugin);
addRxPlugin(RxDBDevModePlugin);

export type MyDatabaseCollections = {
  food_items: FoodItemCollection;
  food_categories: FoodCategoryCollection;
};

export type MyDatabase = RxDatabase<MyDatabaseCollections>;

declare global {
  interface Window {
    db: MyDatabase;
  }
}

export const initialize = async () => {
  console.log("DatabaseService: creating database..");

  const db = await createRxDatabase<MyDatabaseCollections>({
    name: "db",
    storage: getRxStorageDexie(),
    ignoreDuplicate: true,
    cleanupPolicy: {
      /**
       * The minimum time in milliseconds for how long
       * a document has to be deleted before it is
       * purged by the cleanup.
       * [default=one month]
       */
      minimumDeletedTime: 1000 * 60 * 60 * 24 * 31, // one month,
      /**
       * The minimum amount of that that the RxCollection must have existed.
       * This ensures that at the initial page load, more important
       * tasks are not slowed down because a cleanup process is running.
       * [default=60 seconds]
       */
      minimumCollectionAge: 1000 * 60, // 60 seconds
      /**
       * After the initial cleanup is done,
       * a new cleanup is started after [runEach] milliseconds
       * [default=5 minutes]
       */
      runEach: 1000 * 60 * 5, // 5 minutes
      /**
       * If set to true,
       * RxDB will await all running replications
       * to not have a replication cycle running.
       * This ensures we do not remove deleted documents
       * when they might not have already been replicated.
       * [default=true]
       */
      awaitReplicationsInSync: true,
      /**
       * If true, it will only start the cleanup
       * when the current instance is also the leader.
       * This ensures that when RxDB is used in multiInstance mode,
       * only one instance will start the cleanup.
       * [default=true]
       */
      waitForLeadership: true,
    },
  });
  console.log("DatabaseService: created database");
  //write db to window for debugging
  window["db"] = db;

  // show leadership in title
  db.waitForLeadership().then(() => {
    console.log("isLeader now");
    // document.title = "♛ " + document.title;
  });

  console.log("DatabaseService: create collections");
  await db.addCollections({
    food_items: {
      schema: foodItemSchema,
    },
    food_categories: {
      schema: foodCategorySchema,
    },
  });

  console.log("DatabaseService: add hooks");
  addHooks(db);

  // TODO: For mock data
  // await db.collections.food_items.remove();
  // await db.collections.food_categories.remove();

  // console.log("DatabaseService: seed dummy data");
  // await seedData(db);

  // sync
  // console.log("DatabaseService: sync");
  // await Promise.all(
  //   Object.values(db.collections).map(async (col) => {
  //     try {
  //       // create the CouchDB database
  //       await fetch(syncURL + col.name + "/", {
  //         method: "PUT",
  //       });
  //     } catch (err) {}
  //   })
  // );
  // console.log("DatabaseService: sync - start live");
  // Object.values(db.collections)
  //   .map((col) => col.name)
  //   .map((colName) => {
  //     const url = syncURL + colName + "/";
  //     console.log("url: " + url);
  //     const replicationState = replicateCouchDB({
  //       collection: db[colName],
  //       url,
  //       live: true,
  //       pull: {},
  //       push: {},
  //       autoStart: true,
  //     });
  //     replicationState.error$.subscribe((err) => {
  //       console.log("Got replication error:");
  //       console.dir(err);
  //     });
  //   });

  return db;
};
