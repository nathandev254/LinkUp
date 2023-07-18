import express from 'express'
import { CreatePost,GetPosts,UpdatePosts,DeletePost } from '../controllers/PostController.js'

const PostRouter = express.Router()

PostRouter.route('/post').get(GetPosts)
PostRouter.route('/post/:user_id').post(CreatePost).put(UpdatePosts).delete(DeletePost)

export default PostRouter