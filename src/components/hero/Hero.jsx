import "./hero.css";
import React from "react";

const Hero = () => {
  return (
    <section>
      <article>
        <ul className="panels">
          <li className="panel">
            <a href="#">
              <span>
                Animals
               
              </span>
            </a>
            <img
              src="./images/nike5.png"
              alt="image of lions"
            />
          </li>
          <li className="panel">
            <a href="#">
              <span>
                History
              </span>
            </a>
            <img
              src="./images/nike4.png"
              alt="Marthin Luther King"
            />
          </li>
          <li className="panel">
            <a href="#">
              <span>
                Science
              </span>
            </a>
            <img
              src="./images/nike3.png"
              alt="image of spaceship"
            />
          </li>
          <li className="panel">
            <a href="#">
              <span>
                Travel
              </span>
            </a>
            <img
              src="./images/nike2.png"
              alt="image of hot air balloons"
            />
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Hero;
