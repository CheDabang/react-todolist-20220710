import React, { useState, useEffect, useRef } from 'react';
import Head from './components/Head.jsx';
import List from './components/List.jsx';
import Bottom from './components/Bottom.jsx';
import PubSub from 'pubsub-js';
export default function Func() {
  const [todos, setTodos] = useState([
    { id: '001', name: '基础通信(class版本)开发', done: false },
    { id: '002', name: '基础通信(function版本)开发', done: false },
    { id: '003', name: 'PubSub消息订阅(class版)开发', done: false },
    { id: '004', name: 'PubSub消息订阅(function版)开发', done: true },
  ]);

  const addTodo = (_, todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };
  const updateTodo = (_, data) => {
    const { id, done } = data;
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done };
      } else return todo;
    });
    setTodos(newTodos);
  };
  const deleteTodo = (_, id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };
  const checkAllTodo = (_, done) => {
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
  // let subKey = 'subKey';
  // const allSub = () => {
  // PubSub.subscribe('addTodo', addTodo);
  // PubSub.subscribe('updateTodo', updateTodo);
  // PubSub.subscribe('deleteTodo', deleteTodo);
  // PubSub.subscribe('checkAllTodo', checkAllTodo);
  // PubSub.subscribe('clearCheckTodo', clearCheckTodo);
  // };
  let subAddTodo = '';
  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      PubSub.subscribe('addTodo', addTodo);
      // allSub();
      subAddTodo = PubSub.subscribe('addTodo', addTodo);
      console.log('挂载');
    }
    // PubSub.subscribe('updateTodo', updateTodo);
    // PubSub.subscribe('deleteTodo', deleteTodo);
    // PubSub.subscribe('checkAllTodo', checkAllTodo);
    // PubSub.subscribe('clearCheckTodo', clearCheckTodo);

    return function cleanup() {
      console.log('卸载了');
      PubSub.unsubscribe(subAddTodo);
      // PubSub.clearAllSubscriptions();
    };
  }, [subAddTodo]);
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
