import "../App.css";
import filters from "../filters";
import { TodosStoreContext } from "../App";
import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
const Filters = observer(() => {
  const todosStore = useContext(TodosStoreContext);
  const changeFilter = (filter) => todosStore.setCurrentFilter(filter);
  return (
    <div>
      <a
        className={`filter ${
          todosStore.currentFilter === filters.ALL ? "activeFilter" : ""
        }`}
        onClick={() => changeFilter(filters.ALL)}
        href={`#${filters.ALL}`}
      >
        all
      </a>
      <a
        className={`filter ${
          todosStore.currentFilter === filters.NEW ? "activeFilter" : ""
        }`}
        onClick={() => changeFilter(filters.NEW)}
        href={`#${filters.NEW}`}
      >
        new
      </a>
      <a
        className={`filter ${
          todosStore.currentFilter === filters.COMPLETED ? "activeFilter" : ""
        }`}
        onClick={() => changeFilter(filters.COMPLETED)}
        href={`#${filters.COMPLETED}`}
      >
        completed
      </a>
    </div>
  );
});
export default Filters;
