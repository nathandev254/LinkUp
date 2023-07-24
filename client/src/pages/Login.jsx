import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../redux/Apicalls";

const Login = () => {

  const dispatch = useDispatch()
  const user = useSelector(state => state?.user?.user)
  const navigate = useNavigate()

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(5).max(15).required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = (data) => {
    LoginUser(dispatch,data)
    console.log(user)
    user ? navigate('/home') : navigate('/login')
  };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit(handleLogin)}>
        <h2>Welcome Back!</h2>
        <div className="form-group">
          <label htmlFor="email">email</label>
          <input type="text" id="email" {...register("email")} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register("password")} />
        </div>
        <button className="login--button" type="submit">
          Login
        </button>
        <span className="span">
          have an account
          <Link className="span--link" to="/">
            sign up
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
