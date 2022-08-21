import React, { Component } from 'react';
import store from '../../../store';
import { checkAllTodo, clearCheckTodo } from '../../../store/todoAction';
export default class bottom extends Component {
  handleCheckAll = (e) => {
    // PubSub.publish('checkAllTodo', e.target.checked)
    const done = e.target.checked
    store.dispatch(checkAllTodo({done}))
  };
  handleClearCheck = () => {
    store.dispatch(clearCheckTodo())
    // PubSub.publish('checkAllTodo', '')
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
