import filters from "./filters";
const filteredTodos = function (todos, filter) {
  return todos.filter((todo) => {
    switch (filter) {
      case filters.NEW:
        return !todo.completed;
      case filters.COMPLETED:
        return todo.completed;
      default:
        return true;
    }
  });
};

export default filteredTodos;
