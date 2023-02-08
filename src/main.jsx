import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import UseEffect from "./pages/useeffect";
import UseMemo from "./pages/usememo";
import UseState from "./pages/usestate";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="/usestate" exact element={<UseState />} />
      <Route path="/useeffect" exact element={<UseEffect />} />
      <Route path="/usememo" exact element={<UseMemo />} />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);
