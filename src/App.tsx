import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./Assets/Styles/Index.scss";

import Home from "./pages/Home";
import Register from "./pages/Register";
function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
