import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Category from "./pages/category/Category";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/category" element={<Category />} />
          {/* <Route path="/category" element={< MainCard/>} /> */}
        </Routes>        
      </Router>
    </>
  );
};

export default App;
