import express from 'express'
import { CreatePost,GetPosts,UpdatePosts,DeletePost } from '../controllers/PostController.js'

const PostRouter = express.Router()

PostRouter.route('/post').post(CreatePost).get(GetPosts).put(UpdatePosts).delete(DeletePost)

export default PostRouter