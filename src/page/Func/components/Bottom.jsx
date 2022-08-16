import React from "react";

export default function Bottom(props) {
  const { todos, checkAllTodo, clearCheckTodo } = props;
  const total = todos.length;
  const doneCount = todos.reduce(
    (pre, current) => pre + (current.done ? 1 : 0),
    0
  );
  const handleCheckAll = (e) => {
    checkAllTodo(e.target.checked);
  };
  const handleClearCheck = () => {
    clearCheckTodo();
  };
  return (
    <div className="bottom">
      <label>
        <input
          type="checkbox"
          checked={doneCount === total && total !== 0}
          onChange={handleCheckAll}
        />
        <span>已完成{doneCount}个</span>/<span>总数{total}个</span>
      </label>
      <button className="danger" onClick={handleClearCheck}>
        清除已完成任务
      </button>
    </div>
  );
}
