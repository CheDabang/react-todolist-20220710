import React from "react";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import Base from "./page/Base";
import Func from "./page/Func";

export default function App() {
  return (
    <div className="app-container">
      <div className="nav">
        <NavLink to="/base">基础类写法</NavLink>
        <NavLink to="/func">基础函数式写法</NavLink>
      </div>
      <div className="content">
        <Routes>
          <Route path="base" element={<Base />} />
          <Route path="func" element={<Func />} />
          <Route path="*" element={<Navigate to="/base" />} />
        </Routes>
      </div>
    </div>
  );
}
