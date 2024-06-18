import React from "react";
import "./registerform.css";
import { NavLink } from "react-router-dom";
const RegisterForm = () => {
  return (
    <div className="registerform">
      <div className="container">
        <form id="form" className="form">
          <h1>Register Form! FootWear</h1>
          <div className="form-control">
            <label for="full name">Full Name</label>
            <input type="text" id="fullname" placeholder="Enter fullname" />
            <small>Error message</small>
          </div>
          <div className="form-control">
            <label for="contact">Contact No</label>
            <input type="text" id="contact" placeholder="Enter contact no" />
            <small>Error message</small>
          </div>
          <div className="form-control">
            <label for="email">Email</label>
            <input type="text" id="email" placeholder="Enter email" />
            <small>Error message</small>
          </div>
          <div className="form-control">
            <label for="address">Address</label>
            <input type="text" id="address" placeholder="Enter Address" />
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
            Already have an account ?
            {
              <NavLink to={"/login"}>
                <span>Login!</span>
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
