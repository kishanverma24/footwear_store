import React from "react";
import "./blogPage.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import { NavLink, useParams } from "react-router-dom";
const BlogPage = () => {
  const { brandname } = useParams();
  console.log(brandname);
  const brands = {
    bata: { url: "/logo/Bata_logo.png", name: "Bata" },
    brooks: { url: "/logo/Brooks_logo.png", name: "Brooks" },
    burberry: { url: "/logo/Burberry_logo.png", name: "Burberry" },
    columbia: { url: "/logo/Columbia_logo.png", name: "Columbia" },
    converse: { url: "/logo/Converse_logo.png", name: "Converse" },
    crocs: { url: "/logo/Crocs_logo.png", name: "Crocs" },
    fila: { url: "/logo/FILA_logo.png", name: "Fila" },
    hoka: { url: "/logo/Hoka_logo.png", name: "Hoka" },
    jordhan: { url: "/logo/Jordan_logo.png", name: "Jordan" },
    merrell: { url: "/logo/Merrell_logo.png", name: "Merrell" },
    puma: { url: "/logo/Puma_logo.png", name: "Puma" },
    reebok: { url: "/logo/Reebok_logo.png", name: "Reebok" },
    skechers: { url: "/logo/Skechers_logo.png", name: "Skechers" },
    sperry: { url: "/logo/Sperry_logo.png", name: "Sperry" },
    toms: { url: "/logo/Toms_logo.png", name: "Toms" },
    ugg: { url: "/logo/Ugg_logo.png", name: "Ugg" },
    vans: { url: "/logo/vans_logo.png", name: "Vans" },
    adidas: { url: "/logo/adidas_logo.png", name: "adidas" },
  };
  const brand = brands[brandname];
  return (
    <>
      <Navbar />
      <div className="blog">
        <div
          className="banner"
          style={{ backgroundImage: `url(${brand.url})` }}
        ></div>
        <div className="content">
          <div className="blog-post">
            <h2>{brand.name}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              facilisis sapien vel eros fermentum, vel tincidunt mauris
              malesuada. Sed ut velit eget nunc auctor consectetur. Ut bibendum,
              eros vel volutpat blandit, ex mi blandit mauris, vel rhoncus velit
              nisl vel nulla. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ratione perferendis ipsa, doloribus expedita numquam ipsam,
              libero animi distinctio, dolorum fuga fugit. Exercitationem,
              dolores, beatae alias soluta, necessitatibus totam voluptatem quam
              ducimus illum voluptatum consequatur. Sunt iste aliquid est,
              placeat aut minima voluptatum excepturi earum magnam
              necessitatibus, at aliquam odio vel.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
            <NavLink to={"/products"}>
              <p className="p_link">Explore Products!</p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
