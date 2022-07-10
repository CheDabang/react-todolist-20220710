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
  render() {
    return (
      <div className="App">
        <Head />
        <List todos={this.state.todos} />
        <Bottom />
      </div>
    );
  }
}

export default App;
