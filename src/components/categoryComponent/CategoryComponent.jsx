import React from "react";
import "./categoryComponent.css";
import CategoryCard from "../../components/categoryCard/CategoryCard.jsx";
function CategoryComponent() {
  const categories = [
    {
      image: "/images/nike13.png",
      title: "Shoe",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo optio a, aliquid beatae officia neque odit vero corrupti obcaecati corporis nobis sequi necessitatibus? Nisi molestias minus, dolorem quaerat ipsum reprehenderit",
      id: "2",
    },
    {
      image: "/images/nike14.png",
      title: "Shocks",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo optio a, aliquid beatae officia neque odit vero corrupti obcaecati corporis nobis sequi necessitatibus? Nisi molestias minus, dolorem quaerat ipsum reprehenderit",
      id: "3",
    },
    {
      image: "/images/nike11.png",
      title: "Slippers",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo optio a, aliquid beatae officia neque odit vero corrupti obcaecati corporis nobis sequi necessitatibus? Nisi molestias minus, dolorem quaerat ipsum reprehenderit",
      id: "4",
    },
    {
      image: "/images/nike10.png",
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
            return <CategoryCard key={index} category={category} />;
          })}
        </div>
      </div>
    </>
  );
}

export default CategoryComponent;
