import React from "react";
import { nanoid } from "nanoid";
import store from "../../../store";
import { addTodo } from "../../../store/todoAction";
export default function Head() {
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
    e.target.value = "";
    store.dispatch(addTodo(todo))
  };
  return (
    <div className="head">
      <input
        type="text"
        className="new-todo"
        placeholder="请输入新的代办事件，按回车键结束"
        onKeyUp={handleKeyUp}
      />
    </div>
  );
}
