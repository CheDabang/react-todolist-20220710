import React, { Component } from "react";
import Head from "./components/Head.jsx";
import List from "./components/List.jsx";
import Bottom from "./components/Bottom.jsx";
import PubSub from "pubsub-js";
export default class PubsubClass extends Component {
  state = {
    todos: [
      { id: "001", name: "吃饭", done: false },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "打豆豆", done: false },
    ],
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="content-wrap">
        <h1 className="todos-title">todos</h1>
        <h2 className="todos-about">PubSub class版消息订阅与发布</h2>
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
    PubSub.subscribe("addTodo", (_, todo) => {
      const { todos } = this.state;
      const newTodos = [todo, ...todos];
      this.setState({ todos: newTodos });
    });
    PubSub.subscribe("updateTodo", (_, data) => {
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
    PubSub.subscribe("deleteTodo", (_, id) => {
      const { todos } = this.state;
      const newTodos = todos.filter((todo) => {
        return todo.id !== id;
      });
      this.setState({ todos: newTodos });
    });
    PubSub.subscribe("checkAllTodo", (_, done) => {
      const { todos } = this.state;
      const newTodos = todos.map((todo) => {
        return { ...todo, done };
      });
      this.setState({ todos: newTodos });
    });
    PubSub.subscribe("clearCheckTodo", (_) => {
      const { todos } = this.state;
      const newTodos = todos.filter((todo) => {
        return todo.done === false;
      });
      this.setState({ todos: newTodos });
    });
  }
  componentWillUnmount() {
    PubSub.clearAllSubscriptions();
  }
}
