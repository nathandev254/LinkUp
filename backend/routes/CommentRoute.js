import express from 'express'
import {
  CreateComment,
  DeleteComment,
  UpdateComment,
  GetComments,
} from "../controllers/CommentController.js";

const CommentRouter = express.Router()

CommentRouter.route("/comment")
  .get(GetComments)
  .post(CreateComment)
  .delete(DeleteComment)
  .put(UpdateComment);

export default CommentRouter;
