import React, { Component } from "react";
import Head from "./components/Head.jsx";
import List from "./components/List.jsx";
import Bottom from "./components/Bottom.jsx";
export default class Base extends Component {
  state = {
    todos: [
      { id: "001", name: "吃饭", done: false },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "打豆豆", done: false },
    ],
  };

  addTodo = (todo) => {
    const { todos } = this.state;
    const newTodos = [todo, ...todos];
    this.setState({ todos: newTodos });
  };
  updateTodo = (id, done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done };
      } else return todo;
    });
    this.setState({ todos: newTodos });
  };
  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({ todos: newTodos });
  };
  checkAllTodo = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      return { ...todo, done };
    });
    this.setState({ todos: newTodos });
  };
  clearCheckTodo = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => {
      return todo.done === false;
    });
    this.setState({ todos: newTodos });
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <h1>Class类基础写法</h1>
        <Head addTodo={this.addTodo} />
        <List
          todos={todos}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
        />
        <Bottom
          todos={todos}
          checkAllTodo={this.checkAllTodo}
          clearCheckTodo={this.clearCheckTodo}
        />
      </div>
    );
  }
}
