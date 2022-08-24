import React from "react";
import Item from "./Item.jsx";
export default function List(props) {
  const { todos } = props;
  return (
    <div className="list">
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
