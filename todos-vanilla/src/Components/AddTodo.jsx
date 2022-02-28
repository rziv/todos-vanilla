import React, { useState, useContext } from "react";
import { TodosStoreContext } from "../App";

const AddTodo = function () {
  const [newTodo, setNewTodo] = useState("");
  const todosStore = useContext(TodosStoreContext);
  const setTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    //Add new Todo
    todosStore.addTodo(newTodo);
    setNewTodo("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div>
      <input
        onKeyPress={handleKeyPress}
        type="text"
        onChange={setTodo}
        value={newTodo}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
