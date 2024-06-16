import React from "react";

const BlogCard = ({ value }) => {
  return (
    <div className="box1 box">
      <div className="box-content">
        <h2>BrandName</h2>
        <div
          className="box-img"
          style={{ backgroundImage: `url(${value})` }}
        ></div>

        <p>Explore Blog</p>
      </div>
    </div>
  );
};

export default BlogCard;
