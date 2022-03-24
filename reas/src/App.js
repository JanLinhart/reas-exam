import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BothSteps from "./components/Forms/BothSteps";
import Home from "./components/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/form" element={<BothSteps />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
