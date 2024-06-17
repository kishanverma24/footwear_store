import React from "react";
const BlogCard = ({ brand }) => {
  return (
    <div className="box1 box">
      <div className="box-content">
        <h2 style={{ color: "black", fontWeight: "bolder" }}>{brand.name}</h2>
        <div
          className="box-img"
          style={{ backgroundImage: `url(${brand.url})` }}
        ></div>

        <p>Explore Blog</p>
      </div>
    </div>
  );
};

export default BlogCard;
