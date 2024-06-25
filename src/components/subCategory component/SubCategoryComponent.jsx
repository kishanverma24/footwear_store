import React from "react";
import "./subCategoryComponent.css";
import SubCategoryCard from "../subCategory Card/SubCategoryCard.jsx";
import { NavLink, useParams } from "react-router-dom";
function SubCategoryComponent() {
  const { category } = useParams();
  const arr = [
    { h6: "Jordhan", url: "/images/nike5.png" },
    { h6: "Loafer", url: "/images/nike6.png" },
    { h6: "Casual", url: "/images/nike7.png" },
    { h6: "Formal", url: "/images/nike8.png" },
    { h6: "HalfShoe", url: "/images/adidas7.avif" },
  ];
  return (
    <div className="mainn_div">
      {arr.map((obj, index) => (
        <NavLink
          key={index}
          to={`/category/${category}/${obj.h6.toLowerCase()}`}
        >
          <SubCategoryCard
            key={index}
            backgroundImage={obj.url}
            title={obj.h6}
          />
        </NavLink>
      ))}
    </div>
  );
}

export default SubCategoryComponent;
