import React, { createContext } from "react";
import "./App.css";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";
import Filters from "./Components/Filters";
import { observer } from "mobx-react-lite";
import TodosStore from "./TodosStore";

const preload = [
  { text: "read", completed: false, id: 1 },
  { text: "learn", completed: false, id: 2 },
];

const todoStore = new TodosStore(preload);
const TodosStoreContext = createContext();

const App = observer(function App() {
  return (
    <div className="App">
      <TodosStoreContext.Provider value={todoStore}>
        <Todos />
        <AddTodo />
        <Filters />
        <pre>{JSON.stringify(todoStore.filteredTodos)}</pre>
      </TodosStoreContext.Provider>
    </div>
  );
});

export { TodosStoreContext, App as default };
