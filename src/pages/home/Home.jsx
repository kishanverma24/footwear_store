import React from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import Hero from "../../components/hero/Hero.jsx";
import ProductComponent from "../../components/productComponent/ProductComponent.jsx";
import CategoryComponent from "../../components/categoryComponent/CategoryComponent.jsx";
import SubCategoryComponent from "../../components/subCategory component/SubCategoryComponent.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductComponent />
      <CategoryComponent />
      <SubCategoryComponent />
    </>
  );
};

export default Home;
