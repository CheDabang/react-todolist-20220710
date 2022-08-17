import React, { useState } from "react";

export default function Item(props) {
  const { id, name, done, updateTodo, deleteTodo } = props;
  const [mouse, setMouse] = useState(false);
  const handleMouse = (flag) => {
    setMouse(flag);
  };
  const handleCheck = (id) => {
    return (e) => {
      updateTodo(id, e.target.checked);
    };
  };
  const handleDelete = (id) => {
    if (!window.confirm("请确认删除代办事项！")) return;
    deleteTodo(id);
  };
  return (
    <div className="item-box">
      <input
        type="checkbox"
        className="toggle"
        checked={done}
        onChange={handleCheck(id)}
      />
      <label
        className={done ? "done" : ""}
        onMouseEnter={() => handleMouse(true)}
        onMouseLeave={() => handleMouse(false)}
      >
        {name}
        {/* <input type="text"  /> */}
      </label>
      <button
        style={{ display: mouse ? "block" : "none" }}
        className="danger"
        onClick={() => handleDelete(id)}
      >
        删除
      </button>
    </div>
  );
}
