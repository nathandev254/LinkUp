import sql from "mssql";
import Config from "../model/Configuration.js";

export const CreateComment = async (req, res) => {
  const { post_id } = req.params;
  const { description, user_id } = req.body;
  // console.log(post_id,description,user_id)
  try {
    const pool = await sql.connect(Config);
    await pool
      .request()
      .input("user_id", sql.Int, user_id)
      .input("post_id", sql.Int, post_id)
      .input("description", sql.VarChar, description)
      .query(
        "INSERT INTO comments (user_id,post_id,description) VALUES (@user_id,@post_id,@description) "
      );
    res.json({ message: "Comment created successfully" });
  } catch (error) {
    // res.status(400).send(error);
    res.send(error);
  }
};

// Assuming you have imported the required libraries and configurations

export const GetComments = async (req, res) => {
  const { post_id } = req.params;
  try {
    const pool = await sql.connect(Config);
    const results = await pool
      .request()
      .input("post_id", sql.Int, post_id)
      .query(
        "SELECT comments.comment_id, comments.description " +
          "FROM comments " +
          "JOIN posts ON comments.post_id = posts.post_id " +
          "WHERE posts.post_id = @post_id"
      );

    const comments = results.recordset; 
    res
      .status(200)
      .json(comments);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving comments" });
  }
};

export const DeleteComment = async (req, res) => {
  res.json({ message: "Comment Deleted successfully" });
};

export const UpdateComment = async (req, res) => {
  res.json({ message: "Comment Updated successfully" });
};
