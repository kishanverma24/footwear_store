import React from "react";

const BrandCard = ({logo}) => {
  return (
    <div className="pro-1" key={logo.name}>
      <div className="pro-text">
        <h3>{logo.name}</h3>
        <h6>Shop Now</h6>
      </div>
      <div
        className="pro-img"
        style={{ backgroundImage: `url(${logo.url})` }}
      ></div>
    </div>
  );
};

export default BrandCard;
