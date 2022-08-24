import {
  ADDTODO,
  UPDATETODO,
  DELETETODO,
  CHECKALLTODO,
  CLEARCHECKTODO,
} from "./constant";
const todos = [
  { id: "001", name: "redux组件通信(class版本)", done: true },
  { id: "002", name: "redux组件通信(func版本)", done: true },
];
function todosReducer(preState = todos, action) {
  const { type, data } = action;
  const { id, done } = data ? data : {};
  let newTodos = [];
  switch (type) {
    case ADDTODO:
      newTodos = [data, ...preState];
      return newTodos;
    case UPDATETODO:
      newTodos = preState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done };
        } else {
          return todo;
        }
      });
      return newTodos;
    case DELETETODO:
      newTodos = preState.filter((todo) => {
        return todo.id !== id;
      });
      return newTodos;
    case CHECKALLTODO:
      newTodos = preState.map((todo) => {
        return { ...todo, done };
      });
      return newTodos;
    case CLEARCHECKTODO:
      newTodos = preState.filter((todo) => {
        return todo.done !== true;
      });
      return newTodos;
    default:
      return preState;
  }
}

export default todosReducer;
