import React from "react";
import "./subCategory.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer.jsx";
import CategoryCard from "../../components/categoryCard/CategoryCard.jsx";
import { NavLink } from "react-router-dom";
function SubCategory() {
  const subCategories = [
    {
      image: "/images/nike4.png",
      title: "Jordhan",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo optio a, aliquid beatae officia neque odit vero corrupti obcaecati corporis nobis sequi necessitatibus? Nisi molestias minus, dolorem quaerat ipsum reprehenderit",
      id: "2",
    },
    {
      image: "/images/nike5.png",
      title: "Sneakers",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo optio a, aliquid beatae officia neque odit vero corrupti obcaecati corporis nobis sequi necessitatibus? Nisi molestias minus, dolorem quaerat ipsum reprehenderit",
      id: "3",
    },
    {
      image: "/images/nike6.png",
      title: "Loafers",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo optio a, aliquid beatae officia neque odit vero corrupti obcaecati corporis nobis sequi necessitatibus? Nisi molestias minus, dolorem quaerat ipsum reprehenderit",
      id: "4",
    },
    {
      image: "/images/nike7.png",
      title: "Casual",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo optio a, aliquid beatae officia neque odit vero corrupti obcaecati corporis nobis sequi necessitatibus? Nisi molestias minus, dolorem quaerat ipsum reprehenderit",
      id: "5",
    },
  ];

  return (
    <>
      <Navbar />
      <div>
        <div className="container">
          {subCategories.map((category, index) => {
            return (
              <NavLink to={`/category/${category.title}/brands`}>
                {" "}
                <CategoryCard key={index} category={category} />
              </NavLink>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SubCategory;
