import React from "react";
import "./product.css";
import Card from "../card/ProductCard.jsx";

function ProductItem() {
  const arr = [
    { h6: "hello", p: "hey buddy", url: "/images/nike5.png" },
    { h6: "hello", p: "hey buddy", url: "/images/nike6.png" },
    { h6: "hello", p: "hey buddy", url: "/images/nike7.png" },
    { h6: "hello", p: "hey buddy", url: "/images/nike8.png" },
    { h6: "hello", p: "hey buddy", url: "/images/nike9.png" },
    { h6: "hello", p: "hey buddy", url: "/images/nike10.png" },
    { h6: "hello", p: "hey buddy", url: "/images/nike10.png" },
    { h6: "hello", p: "hey buddy", url: "/images/nike10.png" },
    { h6: "hello", p: "hey buddy", url: "/images/nike10.png" },
    { h6: "hello", p: "hey buddy", url: "/images/nike10.png" },
  ];
  return (
    <div className="main_div">
      {arr.map((obj, index) => (
        <Card key={index} backgroundImage={obj.url} title={obj.h6} description={obj.p} />
      ))}
    </div>
  );
}

export default ProductItem;
