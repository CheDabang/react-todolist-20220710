import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

export default class item extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
  };
  state = { mouse: false };
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };
  handleCheck = (id) => {
    return (e) => {
      console.log(e);
      this.props.updateTodo(id, e.target.checked);
    };
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
        <button style={{ display: mouse ? "block" : "none" }}>删除</button>
      </div>
    );
  }
}
