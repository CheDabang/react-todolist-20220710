import React, { useState } from "react";
import Head from "./components/Head";
import List from "./components/List";
import Bottom from "./components/Bottom";
export default function Func() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];
    console.log(newTodos);
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
  return (
    <div>
      <Head addTodo={addTodo} />
      <List todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      <Bottom />
    </div>
  );
}
