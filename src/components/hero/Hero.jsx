import React, { useEffect, useState } from "react";
import "./hero.css";

const Hero = ({ imageUrlDesktop, imageUrlMobile }) => {
  const [backgroundImage, setBackgroundImage] = useState(imageUrlDesktop);

  useEffect(() => {
    const updateBackgroundImage = () => {
      if (window.innerWidth <= 700) {
        setBackgroundImage(imageUrlMobile);
      } else {
        setBackgroundImage(imageUrlDesktop);
      }
    };

    updateBackgroundImage();
    window.addEventListener("resize", updateBackgroundImage);

    return () => {
      window.removeEventListener("resize", updateBackgroundImage);
    };
  }, [imageUrlDesktop, imageUrlMobile]);

  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-msg">
        {/* <p>
          Lorem ipsum dolor sit amet consectetur amazing adipisicing elit minus
          Delectus ut officia commodi porro.{" "}
          <a href="#">Click here to go to page</a>
        </p> */}
      </div>
    </div>
  );
};

export default Hero;
