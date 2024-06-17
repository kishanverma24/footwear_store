import React from "react";
import "./productComponent.css";
import ProductCard from "../productCard/ProductCard.jsx";
import { NavLink } from "react-router-dom";

function ProductComponent() {
  const arr = [
    { url: "/images/nike5.png" },
    { url: "/images/nike6.png" },
    { url: "/images/nike7.png" },
    { url: "/images/nike8.png" },
    { url: "/images/nike9.png" },
    { url: "/images/nike11.png" },
    { url: "/images/nike12.png" },
    { url: "/images/nike13.png" },
    { url: "/images/nike14.png" },
    { url: "/images/nike4.png" },
  ];
  return (
    <div className="main_div">
      {arr.map((obj, index) => (
        <NavLink to={`/productdetail`}>
          <ProductCard
            key={index}
            backgroundImage={obj.url}
            title={obj.h6}
            description={obj.p}
          />
        </NavLink>
      ))}
    </div>
  );
}

export default ProductComponent;
