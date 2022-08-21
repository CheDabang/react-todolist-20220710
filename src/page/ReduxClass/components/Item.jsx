import React, { Component } from "react";
import store from "../../../store";
import { updateTodo, deleteTodo} from "../../../store/todoAction";
export default class item extends Component {
  state = { mouse: false };
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };
  handleCheck = (id) => {
    return (e) => {
      const done = e.target.checked
      store.dispatch(updateTodo({id, done}))
    };
  };
  handleDelete = (id) => {
    if (!window.confirm("请确认删除代办事项！")) return;
    store.dispatch(deleteTodo({id}))
  };
  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <div
        className="item-box"
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <input
          type="checkbox"
          className="toggle"
          checked={done}
          onChange={this.handleCheck(id)}
        />
        <label className={done ? "done" : ""}>{name}</label>
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
