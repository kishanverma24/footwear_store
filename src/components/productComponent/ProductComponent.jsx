import React from "react";
import "./productComponent.css";
import ProductCard from "../productCard/ProductCard.jsx";

function ProductItem() {
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
        <ProductCard
          key={index}
          backgroundImage={obj.url}
          title={obj.h6}
          description={obj.p}
        />
      ))}
    </div>
  );
}

export default ProductItem;
