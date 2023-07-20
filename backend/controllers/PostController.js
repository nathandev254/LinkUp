import sql from "mssql";
import Config from "../model/Configuration.js";

export const CreatePost = async (req, res) => {
  // const { user_id } = req.params;
  const { description,user_id } = req.body;
  console.log(user_id, description);
  try {
    let pool = await sql.connect(Config);
    await pool
      .request()
      .input("description", sql.VarChar, description)
      .input("user_id", sql.Int, user_id)
      .query(
        "INSERT INTO posts (description,user_id) VALUES (@description,@user_id)"
      );

    res.status(201).json({ message: "Post created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to create a post" });
  } finally {
    sql.close();
  }
};

export const GetPosts = async (req, res) => {
  try {
    let pool = await sql.connect(Config);
    const results = await pool
      .request()
      .query(
        "SELECT users.username, posts.* FROM users INNER JOIN posts ON users.user_id = posts.user_id"
      );
    const posts = results.recordset[0];
    res.status(200).json({ message: "Posts Accessed successfully", posts });
  } catch (error) {
    res.status(400).json({ error: "Failed to access posts" });
  } finally {
    sql.close();
  }
};

export const UpdatePosts = async (req, res) => {
  res.json({ message: "Post Updated successfully" });
};

export const DeletePost = async (req, res) => {
  res.json({ message: "Post Deleted successfully" });
};
