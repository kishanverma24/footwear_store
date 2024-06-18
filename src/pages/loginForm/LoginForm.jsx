import React from "react";
import "./loginform.css";
import { NavLink } from "react-router-dom";
const RegisterForm = () => {
  return (
    <div className="loginform">
      <div className="container">
        <form id="form" className="form">
          <h1>Login Form! FootWear</h1>
          <div className="form-control">
            <label for="email">Email</label>
            <input type="text" id="email" placeholder="Enter email" />
            <small>Error message</small>
          </div>
          <div className="form-control">
            <label for="contact">Contact No</label>
            <input type="text" id="contact" placeholder="Enter contact no" />
            <small>Error message</small>
          </div>

          <div className="form-control">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter password" />
            <small>Error message</small>
          </div>
          <div className="form-control">
            <label for="password2">Confirm password</label>
            <input
              type="password"
              id="password2"
              placeholder="Confirm your password"
            />
            <small>Error message</small>
          </div>
          <h6>
            Don't have an account ?
            {
              <NavLink to={"/register"}>
                <span>Register!</span>
              </NavLink>
            }
          </h6>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
