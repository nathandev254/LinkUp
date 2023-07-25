import axios from "axios";
import {
  RegisterStart,
  RegisterSuccess,
  RegisterFailure,
  Loginstart,
  LoginSuccess,
  LoginFailure,
} from "./Userslice";

export const RegisterUser = async (dispatch, user) => {
  // console.log(user);
   dispatch(RegisterStart())
  axios
    .post("http://localhost:8081/register", user)
    .then(({ data }) => {
      console.log(response);
      dispatch(RegisterSuccess(data));
    })
    .catch((error) => {
      console.log(error);
      dispatch(RegisterFailure());
    });
};

export const LoginUser = (dispatch, user) => {
  dispatch(Loginstart());
  // console.log(user);
  axios
    .post("http://localhost:8081/login", user)
    .then(({data}) => {
      // console.log(data);
      dispatch(LoginSuccess(data));
    })
    .catch((error) => {
      // console.log(error);
      dispatch(LoginFailure());
    });
};

export const LogOut = (dispatch) => {
  // dispatch(LogOut())
};


