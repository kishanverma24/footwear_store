import BlogCard from "../blogCard/BlogCard";
import "./blogComponent.css";
import React from "react";
const Blog = () => {
  return (
    <div className="blog-section">
      <BlogCard value={"./images/nike2.png"}/>
      <BlogCard value={"./images/nike3.png"}/>
      <BlogCard value={"./images/nike4.png"}/>
      <BlogCard value={"./images/nike5.png"}/>
      <BlogCard value={"./images/nike6.png"}/>
      
    </div>
  );
};

export default Blog;
