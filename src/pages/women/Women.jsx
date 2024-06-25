import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ProductComponent from "../../components/productComponent/ProductComponent";
import Footer from "../../components/footer/Footer.jsx";
import Hero from "../../components/hero/Hero.jsx";
const Women = () => {
  const imageUrlDesktop = "./images/women_hero_section.jpg";
  const imageUrlMobile = "./images/women_hero_section.jpg";
  return (
    <>
      <Navbar />\{" "}
      <Hero imageUrlDesktop={imageUrlDesktop} imageUrlMobile={imageUrlMobile} />{" "}
      <ProductComponent />
      <Footer />
    </>
  );
};

export default Women;
