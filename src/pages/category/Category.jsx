import React from "react";
import Navbar from "../../components/navbar/Navbar";
import CategoryComponent from "../../components/categoryComponent/CategoryComponent";
import Footer from "../../components/footer/Footer.jsx";
import Hero from "../../components/hero/Hero.jsx";
const Category = () => {
  const imageUrlDesktop = "./images/category_desktop.jpg";
  const imageUrlMobile = "./images/category_mobile_hero.jpg";
  return (
    <>
      <Navbar />
      <Hero
        imageUrlDesktop={imageUrlDesktop}
        imageUrlMobile={imageUrlMobile}
      />{" "}
      <CategoryComponent />
      <Footer />
    </>
  );
};

export default Category;
