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
import ProductDetails from "./pages/productDetails/ProductDetails.jsx";
import RegisterForm from "./pages/registerForm/RegisterForm.jsx";
import LoginForm from "./pages/loginForm/LoginForm.jsx";
import ShoppingCart from "./components/shoppingCart/ShoppingCart.jsx";
const App = () => {
  return (
    <>
      <Router>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/category" element={<Category />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productdetail" element={<ProductDetails />} />
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
