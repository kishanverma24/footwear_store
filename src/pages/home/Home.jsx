import React from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import Hero from "../../components/hero/Hero.jsx";
import ProductComponent from "../../components/productComponent/ProductComponent.jsx";
import CategoryComponent from "../../components/categoryComponent/CategoryComponent.jsx";
import SubCategoryComponent from "../../components/subCategory component/SubCategoryComponent.jsx";
import Footer from "../../components/footer/Footer.jsx";
import TodayDeals from "../../components/todayDeals/TodayDeals.jsx";
const Home = () => {
  const imageUrlDesktop = "./images/hero_section_image.jpg";
  const imageUrlMobile = "./images/hero_long.jpg";
  return (
    <>
      <Navbar />
      <Hero
        imageUrlDesktop={imageUrlDesktop}
        imageUrlMobile={imageUrlMobile}
      />{" "}
      <ProductComponent />
      <CategoryComponent />
      <TodayDeals />
      <SubCategoryComponent />
      <Footer />
    </>
  );
};

export default Home;
