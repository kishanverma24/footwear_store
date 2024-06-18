import { NavLink } from "react-router-dom";
import "./navbar.css";
import React from "react";

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

          <li className="li">
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
        <h1 className="logo">Footwearers</h1>
      </div>
    </nav>
  );
};

export default Navbar;
