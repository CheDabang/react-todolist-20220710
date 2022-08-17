import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "./Item.jsx";

export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
  };
  render() {
    const { todos, updateTodo, deleteTodo } = this.props;
    return (
      <div className="list">
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <Item
                  {...todo}
                  updateTodo={updateTodo}
                  deleteTodo={deleteTodo}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
