import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./about.css";
import React from "react";
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
      <section className="blogs">
        <h1 className="title">
          Our <span>Blogs!</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <img src="./images/nike3.png" alt="image of spaceship" />{" "}
          
            <h3>Slices of Delight:Exploring The World of Pizza</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.asperiores
              corporis repudiandae dolorem beatae
            </p>
            <a href="#" className="btn">
              Read more
            </a>
          </div>

          <div className="box">
            <img src="./images/nike4.png" alt="image of spaceship" />{" "}
          
            <h3>Slices of Delight:Exploring The World of Pizza</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.asperiores
              corporis repudiandae dolorem beatae
            </p>
            <a href="#" className="btn">
              Read more
            </a>
          </div>

          <div className="box">
            <img src="./images/nike6.png" alt="image of spaceship" />
           
            <h3>Slices of Delight:Exploring The World of Pizza</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.asperiores
              corporis repudiandae dolorem beatae
            </p>
            <a href="#" className="btn">
              Read more
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
