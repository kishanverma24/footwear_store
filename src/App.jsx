import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Category from "./pages/category/Category";
import SubCategory from "./pages/subcategory/SubCategory";
import Brands from "./pages/brands/Brands";
import Products from "./pages/products/Products";
import Men from "./pages/men/Men";
import Women from "./pages/women/Women";
import BlogPage from "./pages/blogPage/BlogPage.jsx";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/category" element={<Category />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog/:brandname" element={<BlogPage />} />
          <Route path="/category/:category" element={<SubCategory />} />
          <Route path="/category/:category/:subcategory" element={<Brands />} />
          <Route
            path="/category/:category/:subcategory/:brand"
            element={<Products />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
