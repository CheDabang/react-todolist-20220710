import React, { Component } from "react";
import Item from "../Item";

export default class List extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div>
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <Item {...todo} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
