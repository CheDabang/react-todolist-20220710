import React, { useState } from "react";
import Head from "./components/Head.jsx";
import List from "./components/List.jsx";
import Bottom from "./components/Bottom.jsx";
import store from "../../store";
export default function Func() {
  const [todos, setTodos] = useState(store.getState());
  store.subscribe(() => {
    setTodos(store.getState());
  });
  return (
    <div className="content-wrap">
      <h1 className="todos-title">todos</h1>
      <h2 className="todos-about">基础通信(function版本)</h2>
      <Head />
      <List todos={todos} />
      <Bottom todos={todos} />
    </div>
  );
}
