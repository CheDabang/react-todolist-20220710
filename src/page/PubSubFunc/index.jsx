import React, { useState, useEffect, useRef, useCallback } from "react";
import Head from "./components/Head.jsx";
import List from "./components/List.jsx";
import Bottom from "./components/Bottom.jsx";
import PubSub from "pubsub-js";
// import { useCallback } from 'react';
// import { useSubscribe, useUnSubscribe } from "../../utils/usePubSub";

export default function Func(prpos) {
  const { path } = prpos;
  const [todos, setTodos] = useState([
    { id: "001", name: "基础通信(class版本)开发", done: false },
    { id: "002", name: "基础通信(function版本)开发", done: false },
    { id: "003", name: "PubSub消息订阅(class版)开发", done: false },
    { id: "004", name: "PubSub消息订阅(function版)开发", done: true },
  ]);
  const refTodos = useRef(todos);
  /**
   * useCallback + useRef 获取到最新的todos
   */
  const addTodo = useCallback((_, todo) => {
    const newTodos = [todo, ...refTodos.current];
    setTodos(newTodos);
  }, []);

  // console.log(addTodoCall)

  // const addTodo = useEvent((_, todo) => {
  //   console.log(todos)
  //   const newTodos = [todo, ...todos];
  //   setTodos(newTodos);
  // });
  const updateTodo = useCallback((_, data) => {
    const { id, done } = data;
    const newTodos = refTodos.current.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done };
      } else return todo;
    });
    setTodos(newTodos);
  }, []);
  const deleteTodo = useCallback((_, id) => {
    const newTodos = refTodos.current.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  },[]);
  const checkAllTodo = useCallback((_, done) => {
    const newTodos = refTodos.current.map((todo) => {
      return { ...todo, done };
    });
    setTodos(newTodos);
  }, []);
  const clearCheckTodo = useCallback(() => {
    const newTodos = refTodos.current.filter((todo) => {
      return todo.done !== true;
    });
    setTodos(newTodos);
  }, []);

  useEffect(() => {
    refTodos.current = todos;
  });
  useEffect(
    () => {
      const subAddTodo = PubSub.subscribe("addTodo", addTodo);
      const subDelete = PubSub.subscribe("deleteTodo", deleteTodo);
      const subUpdate = PubSub.subscribe("updateTodo", updateTodo);
      const subCheckAll = PubSub.subscribe("checkAllTodo", checkAllTodo);
      const subClearCheck = PubSub.subscribe("clearCheckTodo", clearCheckTodo);
      return () => {
        PubSub.unsubscribe(
          subAddTodo,
          subDelete,
          subUpdate,
          subCheckAll,
          subClearCheck
        );
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [path]
  );
  return (
    <div className="content-wrap">
      <h1 className="todos-title">todos</h1>
      <h2 className="todos-about">PubSub消息订阅(function版)</h2>
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
