import React, { useState } from "react";

export default function Item(props) {
  const { name } = props;
  const [mouse, setMouse] = useState(false);
  const handleMouse = (flag) => {
    setMouse(flag);
  };
  return (
    <div
      className="item-box"
      onMouseEnter={() => handleMouse(true)}
      onMouseLeave={() => handleMouse(false)}
    >
      <label>{name}</label>
      <button style={{ display: mouse ? "block" : "none" }} className="danger">
        删除
      </button>
    </div>
  );
}
