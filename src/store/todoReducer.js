import {
  ADDTODO,
  UPDATETODO,
  DELETETODO,
  CHECKALLTODO,
  CLEARCHECKTODO,
} from "./constant";
const todos = [{ id: "001", name: "redux组件通信(class版本)", done: true }];
function todosReducer(preState = todos, action) {
  const { type, data } = action;
  let newTodos = []
  switch (type) {
    case ADDTODO:
      newTodos = [data, ...preState];
      return newTodos
    case UPDATETODO:
      const {id, done} = data
      newTodos = preState.map((todo)=> {
        if (todo.id === id) {
          return { ...todo, done };
        } else {
          return todo;
        }
      })
      return newTodos
    case DELETETODO:
      return 'Delete'
      // newTodos = [data]
    case CHECKALLTODO:
      return 'check'
    case CLEARCHECKTODO:
      return 'clear'
    default:
      return preState
  }
}

export default todosReducer;
