import React from "react";
import Navbar from "../../components/navbar/Navbar";
import SubCategoryComponent from "../../components/subCategory component/SubCategoryComponent";
import { useParams } from "react-router-dom";

const SubCategory = () => {
 return (
    <>
      <Navbar />
      <SubCategoryComponent />
    </>
  );
};

export default SubCategory;
