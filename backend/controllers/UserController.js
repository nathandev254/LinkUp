import sql from "mssql";
import bcrypt from "bcrypt";
import Config from "../model/Configuration.js";

export const Register = async (req, res) => {
  try {
    const { username, firstname, lastname, email, password } = req.body;
    const hashedpassword = bcrypt.hashSync(password, 10);

    const pool = await sql.connect(Config);
    pool
      .request()
      .input("username", sql.VarChar, username)
      .input("firstname", sql.VarChar, firstname)
      .input("lastname", sql.VarChar, lastname)
      .input("email", sql.VarChar, email)
      .input("hashedpassword", sql.VarChar, hashedpassword)
      .query(
        "INSERT INTO users(username,firstname,lastname,email,password) VALUES (@username,@firstname,@lastname,@email,@hashedpassword)"
      );
      res.status(201).json({message:'User Created successfully'})
  } catch (error) {
    res.status(400).json({error:'Failed to create the user'});
  }
};

export const Login = async (req, res) => {
  try {
    res.json({ message: "User logged in successfully" });
  } catch (error) {}
};
