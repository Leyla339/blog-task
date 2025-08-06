import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import "./index.css";
import Cards from "./Cards";
import Career from "./Career";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/blog-task" element={<Cards />}></Route>
        <Route path="/blog-task/career-cv" element={<Career />}></Route>

      </Routes>
    </div>
  );
};

export default App;
