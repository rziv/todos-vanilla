import filters from "./filters";
import filterTodos from "./filterTodos";
import { observable, action, computed, makeObservable } from "mobx";

export default class TodosStore {
  todos = [];
  currentFilter = filters.ALL;

  constructor(initialTodos = []) {
    makeObservable(this, {
      todos: observable,
      currentFilter: observable,
      addTodo: action,
      toggleTodo: action,
      setCurrentFilter: action,
      filteredTodos: computed,
    });
    this.todos = initialTodos;
  }

  addTodo(text) {
    this.todos.push({
      text,
      completed: false,
      id: Math.random() * 1000000,
    });
  }

  toggleTodo(id) {
    this.todos.map((todo) => {
      return todo.id === id
        ? Object.assign(todo, { completed: !todo.completed })
        : todo;
    });
  }

  setCurrentFilter(filter) {
    this.currentFilter = filter;
  }

  get filteredTodos() {
    return filterTodos(this.todos, this.currentFilter);
  }
}
