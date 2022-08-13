import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

//   <React.StrictMode>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
// 旧版方式render方式，新版不推荐
// import ReactDOM from "react-dom";
// ReactDOM.render(<App />, document.getElementById("root"));
