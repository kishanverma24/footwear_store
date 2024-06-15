import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
// import About from "./pages/about/About";
import Category from "./pages/category/Category";
import Men from "./pages/men/Men";
import Women from "./pages/women/Women";
import SubCategory from "./pages/subcategory/SubCategory";
import Brands from "./pages/brands/Brands";
import Product from "./pages/product/Product";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/men" element={<Men />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/:subcategoryName" element={<SubCategory/>}/>
          <Route path="/category/:subcategoryName/brands" element={<Brands/>}/>
          <Route path="/category/:subcategoryName/brands/product" element={<Product/>}/>
        </Routes>     
      </Router>
    </>
  );
};

export default App;
