import React, { useState } from "react";

export default function Item(props) {
  const { id, name, done, updateTodo, deleteTodo } = props;
  const [mouse, setMouse] = useState(false);
  const handleMouse = (flag) => {
    setMouse(flag);
  };
  const handleCheck = (id) => {
    console.log(this);
    return (e) => {
      updateTodo(id, e.target.checked);
    };
  };
  const handleDelete = (id) => {
    deleteTodo(id);
  };
  return (
    <div
      className="item-box"
      onMouseEnter={() => handleMouse(true)}
      onMouseLeave={() => handleMouse(false)}
      style={{ backgroundColor: mouse ? "#ddd" : "#fff" }}
    >
      <input type="checkbox" className="toggle" checked={done} onChange={handleCheck(id)} />
      <label>
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
