import express from "express";
import {
  CreateComment,
  GetComments,
} from "../controllers/CommentController.js";

const CommentRouter = express.Router();

CommentRouter.route("/comment/:post_id").post(CreateComment).get(GetComments);


export default CommentRouter;
