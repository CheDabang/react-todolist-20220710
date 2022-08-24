import React, { useState } from "react";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import Base from "./page/Base";
import Func from "./page/Func";
import PubsubClass from "./page/PubsubClass";
import PubsubFunc from "./page/PubSubFunc";
import ReduxClass from "./page/ReduxClass"
import ReduxFunc from "./page/ReduxFunc"

export default function App() {
  const [path, setPath] = useState("/PubsubFunc");
  const test = (e) => {
    console.log(e);
    const path = e.target.dataset.path;
    setPath(path);
  };
  return (
    <div className="app-container">
      <div className="nav" onClick={test}>
        <NavLink to="/base" data-path="/PubsubFunc">
          基础通信(class版本)
        </NavLink>
        <NavLink to="/func" data-path="/PubsubFunc">
          基础通信(function版本)
        </NavLink>
        <NavLink to="/pubsubClass" data-path="/PubsubFunc">
          PubSub消息订阅(class版本)
        </NavLink>
        <NavLink to="/pubsubFunc" data-path="/PubsubFunc">
          PubSub消息订阅(function版本)
        </NavLink>
        <NavLink to="/reduxClass" data-path="/reduxClass">
          redux组件通信(class版本)
        </NavLink>
        <NavLink to="/reduxFunc" data-path="/reduxFunc">
          redux组件通信(func版本)
        </NavLink>
      </div>
      <div className="content">
        <Routes>
          <Route path="base" element={<Base />} />
          <Route path="func" element={<Func />} />
          <Route path="pubsubClass" element={<PubsubClass />} />
          <Route path="pubsubFunc" element={<PubsubFunc path={path} />} />
          <Route path="reduxClass" element={<ReduxClass path={path} />} />
          <Route path="reduxFunc" element={<ReduxFunc path={path} />} />
          <Route path="*" element={<Navigate to={path} />} />
        </Routes>
      </div>
    </div>
  );
}
