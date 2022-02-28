import Todo from "./Todo";
import filters from "../filters";
import { TodosStoreContext } from "../App";
import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
const Todos = observer(function () {
  const todosStore = useContext(TodosStoreContext);
  return (
    <div>
      <h3>Todos</h3>
      <ul>
        {todosStore.filteredTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
});
export default Todos;
