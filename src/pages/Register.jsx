import React, { useState } from "react";
// import connectComponent from "../../connect";
// import { loginAction } from '../../actions/User'
import "./styles.scss";

const Register = () => {
  return (
    <div>
      <div className="header">
        <div className="Carlogo" />
        <div className="heading">Register To App</div>
      </div>
      <div className="form">
        <form className="card-panel z-depth-0">
          <div className="input-field ">
            <label htmlFor="fullName" className="active">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
            />
          </div>
          <div className="input-field ">
            <label htmlFor="usename" className="active">
              Email
            </label>
            <input
              id="usename"
              type="email"
              placeholder="Enter your email id"
            />
          </div>
          <div className="input-field ">
            <label htmlFor="mobileNumber" className="active">
              Mobile Number
            </label>
            <input
              id="mobileNumber"
              type="text"
              placeholder="Enter your mobile number"
            />
          </div>

          <div className="input-field ">
            <label htmlFor="password" className="active">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your Password"
            />
          </div>
          <div className="input-field ">
            <label htmlFor="carName" className="active">
              Car Name
            </label>
            <input id="carName" type="text" placeholder="Enter your car name" />
          </div>

          <div className="center-align">
            <button type="submit" className="btn blue">
              Register
            </button>
          </div>
        </form>
        <div className="center-align">
          Already have an account?{" "}
          <a href="/register" className="blue-text">
            Login Now
          </a>
        </div>
      </div>
    </div>
  );
};
export default Register;
