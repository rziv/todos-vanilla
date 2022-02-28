import { TodosStoreContext } from "../App";
import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
const Todo = observer(function ({ todo }) {
  const todosStore = useContext(TodosStoreContext);
  const todoId = todo.id;
  return (
    <li>
      <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => todosStore.toggleTodo(todoId)}
        name="IsCompletedTodo"
        id={`IsCompletedTodo${todoId}`}
      />
    </li>
  );
});

export default Todo;
