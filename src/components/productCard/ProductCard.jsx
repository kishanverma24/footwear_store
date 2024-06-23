import React from "react";

const ProductCard = ({ product }) => {
  const name = "Honney";
  const price = "5000";
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${product.url})` }}
        className="sm_div"
      >
       
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "5px",
        }}
      >
        <h4 style={{color:"black"}}>Name: {product.name}</h4>
        <h4 style={{color:"black"}}>Price: {product.price}</h4>
      </div>
    </div>
  );
};

export default ProductCard;
