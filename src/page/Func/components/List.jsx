import React from "react";
import PropTypes from "prop-types";
import Item from "./Item.jsx";
export default function List(props) {
  const { todos, updateTodo, deleteTodo } = props;
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <Item {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

List.propTypes = {
  todos: PropTypes.array.isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
