import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="contain">
        <div className="col">
          <h1>Company</h1>
          <ul>
            <li>About</li>
            <li>Mission</li>
            <li>Services</li>
            <li>Social</li>
            <li>Get in touch</li>
          </ul>
        </div>

        <div className="col">
          <h1>Resources</h1>
          <ul>
            <li>Webmail</li>
            <li>Redeem code</li>
            <li>WHOIS lookup</li>
            <li>Site map</li>
          </ul>
        </div>
        <div className="col">
          <h1>Support</h1>
          <ul>
            <li>Contact us</li>
            <li>Web chat</li>
            <li>Email templates</li>
          </ul>
        </div>
        {/* <div className="col social">
          <h1>Social</h1>
          <ul>
            <li>
              <img
               src="social/facebook.svg"
                style={{ width: "32px" }} />
            </li>
            <li>
              <img
               src="social/instagram.svg"
               style={{ width: "32px" }}
              />
            </li>
            <li>
              <img 
               src="social/twitter.svg"
               style={{ width: "32px" }} />
            </li>
            <li>
              <img 
               src="social/linkedin.svg"
               style={{ width: "32px" }} />
            </li>
            <li>
              <img
               src="social/social.svg"
               style={{ width: "32px" }} />
            </li>
          </ul>
        </div> */}
        <div className="clearfix"></div>
      </div>
    </div>
  );
};

export default Footer;
