import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
// import connectComponent from "../../connect";
// import { loginAction } from '../../actions/User'
import "./index.scss";

const Login = () => {
  return (
    <div>
      <div className="header">
        <div className="Carlogo" />
        <div className="heading">Login To App</div>
      </div>
      <div className="form">
        <form className="card-panel z-depth-0">
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
            <label htmlFor="password" className="active">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your Password"
            />
          </div>
          <div>
            <a href="#" className="blue-text">
              Forget Password?
            </a>
          </div>
          <div className="center-align">
            <button type="submit" className="btn blue">
              Login
            </button>
          </div>
        </form>
        <div className="center-align">
          Don't have an account?{" "}
          <a href="/register" className="blue-text">
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};
export default Login;
