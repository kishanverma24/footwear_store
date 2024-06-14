import "./navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>

            <NavLink to="/men">Men</NavLink>
          </li>
          <li>

            <NavLink to="/women">Women</NavLink>
          </li>
         
          <li>
            <NavLink to="/category">Catagory</NavLink>
          </li>
          <li>
            <NavLink to="/about"> About</NavLink>
          </li>

          <li>
            <a href="#">Login</a>
          </li>
        </ul>
        <h1 className="logo">Footwearers</h1>
      </div>
    </nav>
  );
};

export default Navbar;
