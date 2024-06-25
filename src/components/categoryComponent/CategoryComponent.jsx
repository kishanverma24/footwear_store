import React from "react";
import "./categoryComponent.css";
import CategoryCard from "../../components/categoryCard/CategoryCard.jsx";
import { NavLink } from "react-router-dom";
function CategoryComponent() {
  const categories = [
    {
      image: "/images/nike6.png",
      title: "Shoe",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo optio a, aliquid beatae officia neque odit vero corrupti obcaecati corporis nobis sequi necessitatibus? Nisi molestias minus, dolorem quaerat ipsum reprehenderit",
      id: "2",
    },
    {
      image: "/images/bata2.jpeg",
      title: "Shandles",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo optio a, aliquid beatae officia neque odit vero corrupti obcaecati corporis nobis sequi necessitatibus? Nisi molestias minus, dolorem quaerat ipsum reprehenderit",
      id: "3",
    },
    {
      image: "/images/bata6.jpeg",
      title: "Slippers",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo optio a, aliquid beatae officia neque odit vero corrupti obcaecati corporis nobis sequi necessitatibus? Nisi molestias minus, dolorem quaerat ipsum reprehenderit",
      id: "4",
    },
    {
      image:"/images/bata4.jpeg",
      title: "Crocks",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo optio a, aliquid beatae officia neque odit vero corrupti obcaecati corporis nobis sequi necessitatibus? Nisi molestias minus, dolorem quaerat ipsum reprehenderit",
      id: "5",
    },
  ];
  return (
    <>
      {" "}
      <div>
        <div className="container">
          {categories.map((category, index) => {
            return (
              <NavLink key={index} to={`/category/${category.title.toLowerCase()}`}>
                <CategoryCard key={index} category={category} />
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CategoryComponent;
