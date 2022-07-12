import React, { Component } from "react";
import "./index.css";

export default class item extends Component {
  state = { mouse: false };
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };
  handleCheck = (id) => {
    return (e) => {
      this.props.updateTodo(id, e.target.checked);
    };
  };
  handleDelete = (id) => {
    if (!window.confirm("请确认删除代办事项！")) return;
    this.props.deleteTodo(id);
  };
  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <div
        className="item-box"
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
        style={{ backgroundColor: mouse ? "#ddd" : "#fff" }}
      >
        <label>
          <input
            type="checkbox"
            defaultChecked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
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
