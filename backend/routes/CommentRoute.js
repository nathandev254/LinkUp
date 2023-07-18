import express from "express";
import {
  CreateComment,
  DeleteComment,
  UpdateComment,
  GetComments,
} from "../controllers/CommentController.js";

const CommentRouter = express.Router();

CommentRouter.route("/comment").get(GetComments);
CommentRouter.route("/comment/:post_id").post(CreateComment);


export default CommentRouter;
