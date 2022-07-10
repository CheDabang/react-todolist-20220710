import React, { Component } from "react";

export default class item extends Component {
  render() {
    return (
      <div>
        <input type="checkbox" defaultChecked={this.props.done} />
        <span>{this.props.name}</span>
      </div>
    );
  }
}
