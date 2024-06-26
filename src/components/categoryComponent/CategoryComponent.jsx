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
      image: "/images/slippers.jpg",
      title: "Slippers",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo optio a, aliquid beatae officia neque odit vero corrupti obcaecati corporis nobis sequi necessitatibus? Nisi molestias minus, dolorem quaerat ipsum reprehenderit",
      id: "4",
    },
    {
      image: "/images/crocs.jpg",
      title: "Crocks",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo optio a, aliquid beatae officia neque odit vero corrupti obcaecati corporis nobis sequi necessitatibus? Nisi molestias minus, dolorem quaerat ipsum reprehenderit",
      id: "5",
    },
    {
      image: "/images/heels.jpg",
      title: "High Heels",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo optio a, aliquid beatae officia neque odit vero corrupti obcaecati corporis nobis sequi necessitatibus? Nisi molestias minus, dolorem quaerat ipsum reprehenderit",
      id: "5",
    },
    {
      image: "/images/wedges.jpg",
      title: "Wedges",
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
              <NavLink
                key={index}
                to={`/category/${category.title.toLowerCase()}`}
              >
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
