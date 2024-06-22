import { NavLink } from "react-router-dom";
import "./navbar.css";
import React, { useEffect, useState } from "react";

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

          <li
            className="li"
            onClick={() => {
              setIsActive(true);
            }}
          >
            <NavLink className="li">Profile</NavLink>
          </li>

          <li>
            <NavLink className="li" to="/cart">
              Cart
            </NavLink>
          </li>
        </ul>
        <h1 className="logo">Footwearers</h1>
      </div>
      <div
        className={`sidebar-container-navigation ${
          isActive == true ? "slidebar-show" : ""
        } `}
      >
        <button
          onClick={() => {
            setIsActive(false);
          }}
          style={{ cursor: "pointer" }}
        >
          close
        </button>
        <div className="sidebar-left-part">
          <div className="sidebar-top">
            <i className="fa-solid fa-circle-user"></i>
            <h2>
              Hello, <span>sign in</span> <span> </span>
            </h2>
          </div>
          <div className="sidebar-wrap">
            <div className="sidebar-item">
              <p>View Profile</p>
              <p>Wishlist</p>
              <p>Orders</p>
              <p>
                {" "}
                <NavLink
                  to="/login"
                  style={{
                    backgroundColor: "red",
                    padding: "5px",
                    fontWeight: "bold",
                  }}
                >
                  Login
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
