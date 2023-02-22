import React from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import SearchPage from "./Pages/SearchPage/SearchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          {/* Home Page: Search */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search" element={<SearchPage />} />
          {/* Result Page */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
