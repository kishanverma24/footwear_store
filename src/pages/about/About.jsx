import Navbar from "../../components/navbar/Navbar.jsx";
import "./about.css";
import React from "react";
import BlogComponent from "../../components/blogComponent/BlogComponent.jsx";
function About() {
  return (
    <>
      <Navbar />
      <section className="about">
        <div className="row">
          <div className="image">
            <img src="./images/nike8.png" alt="image of spaceship" />{" "}
          </div>
          <div className="content">
            <h3>
              Welcome to our <span>Footwear</span> Store
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet. Lorem, ipsum dolor. Lorem ipsum dolor sit
              amet. Lorem ipsum dolor sit amet. Non debitis deserunt excepturi
              consequatur facilis reiciendis quos impedit enim atque provident.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Lorem ipsum dolor sit amet, consectetur
              adipisicing. Dolore eligendi deserunt doloremque aliquid natus
              atque!
            </p>
            <a href="#" className="btn">
              Read more
            </a>
          </div>
        </div>
      </section>
      <h5 className="brandParteners">Brand Partners</h5>
      <BlogComponent />
    </>
  );
}

export default About;
