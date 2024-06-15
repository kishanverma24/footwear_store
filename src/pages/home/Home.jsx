import React from "react";
// import ProductItem from "../../components/productCard/Product.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Hero from "../../components/hero/Hero.jsx";
import Brand from "../../components/brand/Brand.jsx";
import ProductItem from "../../components/productCard/Product.jsx";
import Category from "../category/Category.jsx";
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductItem />
      <Category />
      <Brand />

      {/* <Footer /> */}
    </div>
  );
}

export default Home;
