import "./footer.css";

import React from "react";

const Footer = () => {
  return (
    <section className="footer ">
      <div className="box-container">
        <div className="box">
          <h3>find us here</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsa
            accusamus placeat.
          </p>
          <div className="share">
            <a href="#">
              <img src="svg/facebook.svg" alt="" />
            </a>
            <a href="#">
              <img src="svg/twitter.svg" alt="" />
            </a>
            <a href="#">
              <img src="svg/instagram.svg" alt="" />
            </a>
            <a href="#">
              <img src="svg/linkedin.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="box">
          <h3>contact us</h3>
          <p>
            <a href="#" className="phone-number">
              +123-456-7890
            </a>
          </p>
          <a href="#" className="link">
            ninjahathori123@gmail.com
          </a>
        </div>
        <div className="box">
          <h3>localization</h3>
          <p>
            15th street main road <br />
            station point city-town <br />
            Delhi 123456
          </p>
        </div>
      </div>
      <div className="credit">
        Created by <span>Kishan Verma </span>| all rights reserved
      </div>
    </section>
  );
};

export default Footer;
