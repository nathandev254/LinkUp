import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="Register--container">
      <div className="Register--left">
        <div className="Register--content">
          <h1 className="Register--heading">Welcome Back!</h1>
          <p className="Register--paragraph">
            To keep connected with us please login with your personal info
          </p>
          <Link className="Login--button" to="login">
            sign in
          </Link>
        </div>
      </div>
      <div className="Register--right">
        <form action="" className="form--Register">
          <h1>Create Account</h1>
          <input type="text" placeholder="username" />
          <input type="text" placeholder="firstname" />
          <input type="text" placeholder="lastname" />
          <input type="email" placeholder="email" />
          <input type="password" name="" id="" placeholder="password" />
          <input type="password" name="" id="" placeholder="ConfirmPassword" />
          <button className="Register--button">sign up</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
