import React from "react";

const Card = ({backgroundImage,title,description}) => {

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="sm_div"
    >
      <h6>{title}</h6>
      <p>{description}</p>
    </div>
  );
};

export default Card;
