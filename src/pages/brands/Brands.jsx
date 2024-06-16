import React from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import BrandComponent from "../../components/brandComponent/BrandComponent.jsx";
import { useParams } from "react-router-dom";

const Brands = () => {
  return (
    <>
      <Navbar />
      <BrandComponent />
    </>
  );
};

export default Brands;
