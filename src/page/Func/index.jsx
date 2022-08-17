import React, { useState } from "react";
import Head from "./components/Head.jsx";
import List from "./components/List.jsx";
import Bottom from "./components/Bottom.jsx";
export default function Func() {
  const [todos, setTodos] = useState([
    { id: "001", name: "基础通信(class版本)开发", done: false },
    { id: "002", name: "基础通信(function版本)开发", done: true },
    { id: "003", name: "PubSub消息订阅(class版)开发", done: false },
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
    <div className="content-wrap">
      <h1 className="todos-title">todos</h1>
      <h2 className="todos-about">基础通信(function版本)</h2>
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
