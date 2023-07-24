import sql from "mssql";
import bcrypt, { compareSync } from "bcrypt";
import JWT from "jsonwebtoken";
import Config from "../model/Configuration.js";

export const Register = async (req, res) => {
  try {
    const { username, firstname, lastname, email, password } = req.body;
    const hashedpassword = bcrypt.hashSync(password, 10);

    const pool = await sql.connect(Config);
    // console.log(email)
    const results = await pool
      .request()
      .input("email", sql.VarChar, email)
      .query("SELECT * FROM users WHERE (email) = @email");

    const user = results.recordset[0];
    // console.log(user)

    if (user) {
      res.status(200).json({ message: "Email exists" });
    } else {
      const connect = await sql.connect(sql);
      connect
        .request()
        .input("username", sql.VarChar, username)
        .input("firstname", sql.VarChar, firstname)
        .input("lastname", sql.VarChar, lastname)
        .input("email", sql.VarChar, email)
        .input("hashedpassword", sql.VarChar, hashedpassword)
        .query(
          "INSERT INTO users(username,firstname,lastname,email,password) VALUES (@username,@firstname,@lastname,@email,@hashedpassword)"
        );
      res.status(201).json({ message: "User Created successfully" });
    }
  } catch (error) {
    res.status(400).json({ error: "Failed to create the user" });
    // res.send(error);
  }
};

export const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let pool = await sql.connect(Config);
    const results = await pool
      .request()
      .input("email", sql.VarChar, email)
      .input("password", sql.VarChar, password)
      .query("SELECT * FROM users WHERE (email) = @email");

    const user = results.recordset[0];
    if (!user) {
      res.status(404).json({ message: "Email not found" });
    } else {
      if (!bcrypt.compareSync(password, user.password)) {
        res.json({ message: "Wrong credentials" });
      } else {
        const { password, ...rest } = user;
        const token = JWT.sign(rest, "LOGIN123", { expiresIn: "1h" });
        res.status(200).json({
          user: user.username,
          user_id: user.user_id,
          email: user.email,
          token,
        });
      }
    }
  } catch (error) {
    res.json({ error: "Failed to login" });
  }
};
