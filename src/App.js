import React from "react";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import Base from "./page/Base";
import Func from "./page/Func";
import PubsubClass from "./page/PubsubClass";
import PubsubFunc from "./page/PubSubFunc";


export default function App() {
  return (
    <div className="app-container">
      <div className="nav">
        <NavLink to="/base">基础通信(class版本)</NavLink>
        <NavLink to="/func">基础通信(function版本)</NavLink>
        <NavLink to="/pubsubClass">PubSub消息订阅(class版本)</NavLink>
        <NavLink to="/pubsubFunc">PubSub消息订阅(function版本)</NavLink>
      </div>
      <div className="content">
        <Routes>
          <Route path="base" element={<Base />} />
          <Route path="func" element={<Func />} />
          <Route path="pubsubClass" element={<PubsubClass />} />
          <Route path="pubsubFunc" element={<PubsubFunc />} />
          <Route path="*" element={<Navigate to="/PubsubFunc" />} />
        </Routes>
      </div>
    </div>
  );
}
