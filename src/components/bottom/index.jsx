import React, { Component } from "react";

export default class bottom extends Component {
  handleDelete = (id) => {
    console.log(id);
    this.props.deleteTodo(id);
  };
  render() {
    return <div>bottom</div>;
  }
}
