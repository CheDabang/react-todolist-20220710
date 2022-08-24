import {
  ADDTODO,
  UPDATETODO,
  DELETETODO,
  CHECKALLTODO,
  CLEARCHECKTODO,
} from "./constant";
export const addTodo = (data) => ({ type: ADDTODO, data });
export const updateTodo = (data) => ({ type: UPDATETODO, data });
export const deleteTodo = (data) => ({ type: DELETETODO, data });
export const checkAllTodo = (data) => ({ type: CHECKALLTODO, data });
export const clearCheckTodo = (_) => ({ type: CLEARCHECKTODO, });
