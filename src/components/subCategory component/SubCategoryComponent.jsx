import React from "react";
import "./subCategoryComponent.css";
import SubCategoryCard from "../subCategory Card/SubCategoryCard.jsx";

function SubCategoryComponent() {
  const arr = [
    { h6: "Jordhan", url: "/images/nike5.png" },
    { h6: "Loafer", url: "/images/nike6.png" },
    { h6: "Casual", url: "/images/nike7.png" },
    { h6: "Formal", url: "/images/nike8.png" },
    { h6: "HalfShoe", url: "/images/nike9.png" },
  ];
  return (
    <div className="mainn_div">
      {arr.map((obj, index) => (
        <SubCategoryCard key={index} backgroundImage={obj.url} title={obj.h6} />
      ))}
    </div>
  );
}

export default SubCategoryComponent;
