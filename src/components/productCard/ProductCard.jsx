import React from "react";

const ProductCard = ({ backgroundImage }) => {
  const name = "Honney";
  const price = "5000";
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
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
        <h4 style={{color:"black"}}>Name: {name}</h4>
        <h4 style={{color:"black"}}>Price: {price}</h4>
      </div>
    </div>
  );
};

export default ProductCard;
