import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="Register--container">
      <div className="Register--left">
        <div className="Register--content">
          <h1 className="Register--heading">Welcome Back!</h1>
          <p className="Register--paragraph">To keep connected with us please login with your personal info</p>
          <Link className="Login--button" to="register">
            sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
