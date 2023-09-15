import "./App.css";
import AddFoodFormContainer from "./containers/Food/AddFoodFormContainer";
import CategoryListContainer from "./containers/Food/CategoryListContainer";
import { useEffect, useRef, useState } from "react";
import { MyDatabase, initialize } from "./rxdb";
import { Provider } from "rxdb-hooks";
import FoodCategoryItemListContainer from "./containers/Food/FoodCategoryItemListContainer";
import AddCategoryFormContainer from "./containers/Food/AddCategoryFormContainer";

function App() {
  const [db, setDb] = useState<MyDatabase>();

  useEffect(() => {
    const getDb = async () => {
      // RxDB instantiation can be asynchronous
      const db = await initialize();
      setDb(db);
    };
    getDb();
  }, []);

  console.log("App rerendered");

  return (
    <Provider db={db}>
      <div className="flex w-screen justify-between">
        <div>
          <CategoryListContainer />

          <FoodCategoryItemListContainer className="mt-6" />
        </div>
        <div className="bg-white h-screen p-6">
          <AddCategoryFormContainer />
          <div className="font-bold my-4">
            Add Food ItemAddCategoryFormContainer
          </div>
          <AddFoodFormContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
