import React from "react";
import "./productComponent.css";
import ProductCard from "../productCard/ProductCard.jsx";
import { NavLink } from "react-router-dom";
import { products } from "../../data/products.js";
function ProductComponent() {
  return (
    <div className="main_div">
      {products.map((product, index) => (
        <NavLink key={index} to={`/productdetail/${product.productId}`}>
          <ProductCard product={product} />
        </NavLink>
      ))}
    </div>
  );
}

export default ProductComponent;
