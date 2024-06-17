import React from "react";

const ProductCard = ({ backgroundImage, title, description }) => {
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
        <h4 >Name:Jordhan</h4>
        <h4>Price:500</h4>
      </div>
    </div>
  );
};

export default ProductCard;