import React, { useState } from 'react';
import PubSub from 'pubsub-js';
export default function Item(props) {
  const { id, name, done } = props;
  const [mouse, setMouse] = useState(false);
  const handleMouse = (flag) => {
    setMouse(flag);
  };
  const handleCheck = (id) => {
    return (e) => {
      PubSub.publish('updateTodo', { id, done: e.target.checked });
    };
  };
  const handleDelete = (id) => {
    if (!window.confirm('请确认删除代办事项！')) return;
    PubSub.publish('deleteTodo', id);
  };
  return (
    <div
      className="item-box"
      onMouseEnter={() => handleMouse(true)}
      onMouseLeave={() => handleMouse(false)}
    >
      <input
        type="checkbox"
        className="toggle"
        checked={done}
        onChange={handleCheck(id)}
      />
      <label className={done ? 'done' : ''}>
        {name}
        {/* <input type="text"  /> */}
      </label>
      <button
        style={{ display: mouse ? 'block' : 'none' }}
        className="danger"
        onClick={() => handleDelete(id)}
      >
        删除
      </button>
    </div>
  );
}
