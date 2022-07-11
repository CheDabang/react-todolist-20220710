import React, { Component } from "react";
import "./App.css";

import Head from "./components/Head";
import List from "./components/List";
import Bottom from "./components/bottom";

export class App extends Component {
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
  render() {
    return (
      <div className="App">
        <Head addTodo={this.addTodo} />
        <List todos={this.state.todos} updateTodo={this.updateTodo} />
        <Bottom />
      </div>
    );
  }
}

export default App;
