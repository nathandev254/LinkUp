import express from "express";
import { Login, Register } from "../controllers/UserController.js";

const UserRoute = express.Router()

UserRoute.route('/login').post(Login)
UserRoute.route('/register').post(Register)

export default UserRoute
