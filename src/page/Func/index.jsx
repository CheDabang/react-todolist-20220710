import React, { useState } from "react";
import Head from "./components/Head";
import List from "./components/List";
import Bottom from "./components/Bottom";
export default function Func() {
  const [todos, setTodos] = useState([
    { id: "001", name: "吃饭", done: false },
    { id: "002", name: "睡觉", done: true },
    { id: "003", name: "打豆豆", done: false },
  ]);
  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };
  const updateTodo = (id, done) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done };
      } else return todo;
    });
    setTodos(newTodos);
  };
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };
  const checkAllTodo = (done) => {
    const newTodos = todos.map((todo) => {
      return { ...todo, done };
    });
    setTodos(newTodos);
  };
  const clearCheckTodo = () => {
    const newTodos = todos.filter((todo) => {
      return todo.done !== true;
    });
    setTodos(newTodos);
  };
  return (
    <div>
      <Head addTodo={addTodo} />
      <List todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      <Bottom
        todos={todos}
        checkAllTodo={checkAllTodo}
        clearCheckTodo={clearCheckTodo}
      />
    </div>
  );
}
