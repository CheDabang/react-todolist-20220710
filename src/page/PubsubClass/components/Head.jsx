import React, { Component } from "react";
import { nanoid } from "nanoid";
import PubSub from "pubsub-js";
export default class head extends Component {
  handleKeyUp = (e) => {
    if (e.keyCode !== 13) return;
    if (!e.target.value.trim()) {
      alert("输入框不能为空");
      return;
    }
    const todo = {
      id: nanoid(),
      name: e.target.value,
      done: false,
    };
    e.target.value = "";
    PubSub.publish('addTodo', todo)
  };
  render() {
    return (
      <div className="head">
        <input
          type="text"
          className="new-todo"
          placeholder="请输入新的代办事件，按回车键结束1"
          onKeyUp={this.handleKeyUp}
        />
      </div>
    );
  }
}
