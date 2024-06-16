import React from "react";
import "./brandComponent.css";
import BrandCard from "../brandCard/BrandCard";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
const BrandComponent = () => {
  const { category, subcategory } = useParams();
  const logos = [
    { url: "/logo/Bata_logo.png", name: "Bata" },
    { url: "/logo/Beckett-Simonon_logo.png", name: "Beckett-Simonon" },
    { url: "/logo/Brooks_logo.png", name: "Brooks" },
    { url: "/logo/Burberry_logo.png", name: "Burberry" },
    { url: "/logo/Columbia_logo.png", name: "Columbia" },
    { url: "/logo/Converse_logo.png", name: "Converse" },
    { url: "/logo/Crocs_logo.png", name: "Crocs" },
    { url: "/logo/FILA_logo.png", name: "Fila" },
    { url: "/logo/Hoka_logo.png", name: "Hoka" },
    { url: "/logo/Hush-Puppies_logo.png", name: "Hush Puppies" },
    { url: "/logo/Jordan_logo.png", name: "Jordan" },
    { url: "/logo/Merrell_logo.png", name: "Merrell" },
    { url: "/logo/New-Balance_logo.png", name: "New Balance" },
    { url: "/logo/Puma_logo.png", name: "Puma" },
    { url: "/logo/Reebok_logo.png", name: "Reebok" },
    { url: "/logo/Skechers_logo.png", name: "Skechers" },
    { url: "/logo/Sperry_logo.png", name: "Sperry" },
    { url: "/logo/Toms_logo.png", name: "Toms" },
    { url: "/logo/Ugg_logo.png", name: "Ugg" },
    { url: "/logo/vans_logo.png", name: "Vans" },
    { url: "/logo/Wolf-&-Shepherd_logo.png", name: "Wolf & Shepherd" },
    { url: "/logo/adidas_logo.png", name: "adidas" },
  ];

  return (
    <section className="simple-pro">
      <div className="pro">
        {logos.map((logo, index) => (
          <NavLink key={index}
            to={`/category/${category}/${subcategory}/${logo.name}`}
          >
            <BrandCard key={index} logo={logo} />
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default BrandComponent;
