import React, { Component } from 'react';
export default class bottom extends Component {
  handleCheckAll = (e) => {
    this.props.checkAllTodo(e.target.checked);
  };
  handleClearCheck = () => {
    this.props.clearCheckTodo();
  };
  render() {
    const { todos } = this.props;
    const total = todos.length;
    const doneCount = todos.reduce(
      (pre, current) => pre + (current.done ? 1 : 0),
      0
    );
    return (
      <div className="bottom">
        <div className="center-box">
          <label>
            <input
              className="toogle"
              type="checkbox"
              checked={doneCount === total && total !== 0}
              onChange={this.handleCheckAll}
            />
            <div className="tip">
              <span>已完成{doneCount}个</span> / <span>总数{total}个</span>
            </div>
          </label>
          <button className="danger" onClick={this.handleClearCheck}>
            清除已完成任务
          </button>
        </div>
      </div>
    );
  }
}
