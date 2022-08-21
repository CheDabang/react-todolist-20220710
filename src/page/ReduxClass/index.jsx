import React, { Component } from "react";
import Head from "./components/Head.jsx";
import List from "./components/List.jsx";
import Bottom from "./components/Bottom.jsx";
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
        <Bottom
          todos={store.getState()}
        />
      </div>
    );
  }
  componentDidMount() {
    store.subscribe(()=> {
      this.setState({})  // 去巧，直接触发render
    })
  }
}
