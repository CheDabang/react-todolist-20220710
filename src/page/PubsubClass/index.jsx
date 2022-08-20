import React, { Component } from "react";
import Head from "./components/Head.jsx";
import List from "./components/List.jsx";
import Bottom from "./components/Bottom.jsx";
import PubSub from "pubsub-js";
export default class PubsubClass extends Component {
  state = {
    todos: [
      { id: "001", name: "基础通信(class版本)开发", done: false },
      { id: "002", name: "基础通信(function版本)开发", done: false },
      { id: "003", name: "PubSub消息订阅(class版)开发", done: true },
    ],
    test: 0,
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="content-wrap">
        <h1 className="todos-title">todos</h1>
        <h2 className="todos-about">PubSub消息订阅(class版)</h2>
        <Head />
        <List todos={todos} />
        <Bottom
          todos={todos}
          checkAllTodo={this.checkAllTodo}
          clearCheckTodo={this.clearCheckTodo}
        />
      </div>
    );
  }
  componentDidMount() {
    this.addToken = PubSub.subscribe("addTodo", (_, todo) => {
      const { todos } = this.state;
      const newTodos = [todo, ...todos];
      this.setState({ todos: newTodos });
    });
    this.addToken1 = PubSub.subscribe("addTodo", (_, todo) => {
      const { todos } = this.state;
      const newTodos = [todo, ...todos];
      this.setState({ todos: newTodos });
    });
    this.updateToken = PubSub.subscribe("updateTodo", (_, data) => {
      const { id, done } = data;
      const { todos } = this.state;
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done };
        } else {
          return todo;
        }
      });
      this.setState({ todos: newTodos });
    });
    this.deleteToken = PubSub.subscribe("deleteTodo", (_, id) => {
      const { todos } = this.state;
      const newTodos = todos.filter((todo) => {
        return todo.id !== id;
      });
      this.setState({ todos: newTodos });
    });
    this.checkAllToken = PubSub.subscribe("checkAllTodo", (_, done) => {
      const { todos } = this.state;
      const newTodos = todos.map((todo) => {
        return { ...todo, done };
      });
      this.setState({ todos: newTodos });
    });
    this.clearToken = PubSub.subscribe("clearCheckTodo", () => {
      const { todos } = this.state;
      const newTodos = todos.filter((todo) => {
        return todo.done === false;
      });
      this.setState({ todos: newTodos });
    });
  }
  componentWillUnmount() {
    PubSub.unsubscribe(
      this.addToken,
      this.updateToken,
      this.deleteToken,
      this.checkAllToken,
      this.clearToken
    );
  }
}
