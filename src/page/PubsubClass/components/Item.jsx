import React, { Component } from "react";
import PubSub from "pubsub-js";
export default class item extends Component {
  state = { mouse: false };
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };
  handleCheck = (id) => {
    return (e) => {
      PubSub.publish("updateTodo", { id, done: e.target.checked });
    };
  };
  handleDelete = (id) => {
    if (!window.confirm("请确认删除代办事项！")) return;
    PubSub.publish("deleteTodo", id);
  };
  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <div className="item-box">
        <input
          type="checkbox"
          className="toggle"
          checked={done}
          onChange={this.handleCheck(id)}
        />
        <label
          className={done ? "done" : ""}
          onMouseEnter={this.handleMouse(true)}
          onMouseLeave={this.handleMouse(false)}
        >
          {name}
        </label>
        <button
          style={{ display: mouse ? "block" : "none" }}
          className="danger"
          onClick={() => this.handleDelete(id)}
        >
          删除
        </button>
      </div>
    );
  }
}
