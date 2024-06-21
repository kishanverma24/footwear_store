import { NavLink } from "react-router-dom";
import "./navbar.css";
import React, { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-container container1">
        <input type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="menu-items">
          <li className="li">
            <NavLink className="li" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="li" to="/men">
              Men
            </NavLink>
          </li>
          <li>
            <NavLink className="li" to="/women">
              Women
            </NavLink>
          </li>

          <li>
            <NavLink className="li" to="/category">
              Catagory
            </NavLink>
          </li>

          <li className="li">
            <NavLink className="li" to="/about">
              About
            </NavLink>
          </li>
          <li
            className="li"
            onClick={() => {
              setIsActive(true);
            }}
          >
            Profile
          </li>

          <li className="li">
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
        <h1 className="logo">Footwearers</h1>
      </div>
      <div
        className={`sidebar-container-navigation ${
          isActive == true ? "slidebar-show" : ""
        } `}
      >
        <div className="sidebar-left-part">
          <div className="sidebar-top">
            <i className="fa-solid fa-circle-user"></i>
            <h2>
              Hello, <span>sign in</span>
            </h2>
          </div>
          <div className="sidebar-wrap">
            <div className="sidebar-item">
              <h2>Trending</h2>
              <p>Best Sellers</p>
              <p>New Releases</p>
              <p>Movers and Shakers</p>
              <p>Echo & Alexa</p>
              <p>Fire TV</p>
              <p>Kindle E-Readers & eBooks</p>
              <p>Audible Audiobooks</p>
              <p>Amazon Prime Video</p>
              <p>Amazon Prime Music</p>

              <p>Gift Cards & Mobile Recharges</p>
              <p>Flight Tickets</p>
              <p>#Foundlt-OnAmazon</p>
              <p>Clearance store</p>
              <p>Your Account</p>
              <p>Customer Service</p>
              <p>Sign in</p>
              <button
                onClick={() => {
                  setIsActive(false);
                }}
                style={{ cursor: "pointer" }}
              >
                close
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
