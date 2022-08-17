import React from "react";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import Base from "./page/Base";
import Func from "./page/Func";
import Pubsub from "./page/PubsubClass";

export default function App() {
  return (
    <div className="app-container">
      <div className="nav">
        <NavLink to="/base">基础通信(class版本)</NavLink>
        <NavLink to="/func">基础通信(function版本)</NavLink>
        <NavLink to="/pubsub">PubSub消息订阅(class版本)</NavLink>
      </div>
      <div className="content">
        <Routes>
          <Route path="base" element={<Base />} />
          <Route path="func" element={<Func />} />
          <Route path="pubsub" element={<Pubsub />} />
          <Route path="*" element={<Navigate to="/Pubsub" />} />
        </Routes>
      </div>
    </div>
  );
}
