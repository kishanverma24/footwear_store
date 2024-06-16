import React from "react";

const SubCategoryCard = ({ backgroundImage, title }) => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className="smm_div"
      >
        <h6 >{title}</h6>
      </div>
    </div>
  );
};

export default SubCategoryCard;
