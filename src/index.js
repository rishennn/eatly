import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/stylesheet/style.scss";
import './assets/stylesheet/response.scss'
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
