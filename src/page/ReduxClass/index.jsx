import React, { Component } from "react";
import Head from "./components/Head.jsx";
import List from "./components/List.jsx";
// import Bottom from "./components/Bottom.jsx";
import PubSub from "pubsub-js";
import store from '../../store'
console.log(store)
export default class PubsubClass extends Component {
  state = {
    todos: [
      { id: "001", name: "redux组件通信(class版本)", done: true },
    ],
    test: 0,
  };
  
  render() {
    // const { todos } = this.state;
    console.log(store.getState())
    return (
      <div className="content-wrap">
        <h1 className="todos-title">todos</h1>
        <h2 className="todos-about">redux组件通信(class版本)</h2>
        <Head />
        <List todos={store.getState()} />
        {/* <Bottom
          todos={todos}
          checkAllTodo={this.checkAllTodo}
          clearCheckTodo={this.clearCheckTodo}
        /> */}
      </div>
    );
  }
  componentDidMount() {

    store.subscribe(()=> {
      this.setState({})
    })
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
    console.log('卸载？')
    PubSub.unsubscribe(
      this.addToken,
      this.updateToken,
      this.deleteToken,
      this.checkAllToken,
      this.clearToken
    );
  }
}
