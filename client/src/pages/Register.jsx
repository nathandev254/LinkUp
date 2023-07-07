import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'

function Register() {
  const schema = yup.object().shape({
    username: yup.string().required(),
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(5).max(15).required(),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password"),null])
      .required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

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
        <form
          action=""
          className="form--Register"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1>Create Account</h1>
          <input type="text" placeholder="username" {...register("username")} />
          <input
            type="text"
            placeholder="firstname"
            {...register("firstname")}
          />
          <input type="text" placeholder="lastname" {...register("lastname")} />
          <input type="email" placeholder="email" {...register("email")} />
          <input
            type="password"
            name=""
            id=""
            placeholder="password"
            {...register("password")}
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="ConfirmPassword"
            {...register("confirmpassword")}
          />
          <button className="Register--button" type="submit">
            sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
