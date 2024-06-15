import React from "react";
import ProductItem from "../../components/productCard/Product.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Product from "../product/Product.jsx";
import Brand from "../../components/brand/Brand.jsx";

function Brands() {
  return (
    <div>
      <Navbar />
      <Brand />
      {/* <Product /> */}
    </div>
  );
}
export default Brands;
