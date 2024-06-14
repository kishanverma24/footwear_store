import React from "react";

const Card = ({ backgroundImage, title, description }) => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className="sm_div"
      >
        <h6>{title}</h6>
        <p>{description}</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "5px",
        }}
      >
        <h4 style={{ fontWeight: "normal" }}>Name:Jordhan</h4>
        <h4>Price:500</h4>
      </div>
    </div>
  );
};

export default Card;
