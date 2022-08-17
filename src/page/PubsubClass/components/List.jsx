import React, { Component } from "react";
import Item from "./Item.jsx";

export default class List extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div className="list">
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <Item
                  {...todo}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
