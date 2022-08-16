import React from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
export default function Head(props) {
  const handleKeyUp = (e) => {
    if (e.keyCode !== 13) return;
    if (!e.target.value.trim()) {
      alert("输入框不能为空");
      return;
    }
    const todo = {
      id: nanoid(),
      name: e.target.value,
      done: false,
    };
    props.addTodo(todo);
    e.target.value = "";
  };
  return (
    <div>
      <input
        type="text"
        placeholder="请输入新的代办事件，按回车键结束"
        onKeyUp={handleKeyUp}
      />
    </div>
  );
}
Head.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
