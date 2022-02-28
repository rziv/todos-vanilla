import React from "react";
import "./App.css";
import Todos from "./Components/Todos.jsx";
import AddTodo from "./Components/AddTodo";
import Filters from "./Components/Filters";

const preload = [
  { text: "read", completed: false, id: 1 },
  { text: "learn", completed: true, id: 2 },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: preload, currentFilter: "all" };
    this.toggleTodo = this.toggleTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }

  toggleTodo(id) {
    const todos = this.state.todos.map((todo) =>
      todo.id === id
        ? Object.assign(todo, { completed: !todo.completed })
        : todo
    );
    this.setState({ todos });
  }

  addTodo(text) {
    const todos = [...this.state.todos];
    todos.push({
      text,
      completed: false,
      id: Math.random() * 1000000,
    });
    this.setState({ todos });
  }

  setFilter(filter) {
    this.setState({ currentFilter: filter });
  }

  render() {
    return (
      <div className="App">
        <Todos
          filter={this.state.currentFilter}
          toggleTodo={this.toggleTodo}
          todos={this.state.todos}
        />
        <AddTodo addTodo={this.addTodo} />
        <Filters setFilter={this.setFilter} />
      </div>
    );
  }
}

export default App;
