import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "../Item";

export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
  };
  render() {
    const { todos, updateTodo } = this.props;
    return (
      <div>
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <Item {...todo} updateTodo={updateTodo} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
