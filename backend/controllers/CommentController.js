import sql from "mssql";
import Config from "../model/Configuration.js";

export const CreateComment = async (req, res) => {
  const { post_id } = req.params;
  const { description,user_id } = req.body;
  try {
    const pool = await sql.connect(Config);
    await pool
      .request()
      .input("user_id", sql.Int, user_id)
      .input("post_id", sql.Int, post_id)
      .input("description", sql.Int, description)
      .query(
        "INSERT INTO comments (user_id,post_id,description) VALUES (@user_id,@post_id,@description) "
      );
      res.json({ message: "Comment created successfully" });
  } catch (error) {
    res.status(400).send(error)
  }
  
};

export const GetComments = async (req, res) => {
  res.json({ message: "Comment Accessed successfully" });
};

export const DeleteComment = async (req, res) => {
  res.json({ message: "Comment Deleted successfully" });
};

export const UpdateComment = async (req, res) => {
  res.json({ message: "Comment Updated successfully" });
};
