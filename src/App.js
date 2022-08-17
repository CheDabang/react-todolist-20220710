import React from "react";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import Base from "./page/Base";
import Func from "./page/Func";
import Pubsub from "./page/PubsubClass";

export default function App() {
  return (
    <div className="app-container">
      <div className="nav">
        <NavLink to="/base">class基础通信写法</NavLink>
        <NavLink to="/func">function基础通信写法</NavLink>
        <NavLink to="/pubsub">pubsub消息订阅通信写法</NavLink>
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
