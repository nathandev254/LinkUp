import express from 'express'
import { CreateLike,Getlikes,Deletelike } from '../controllers/LikeController.js'

const LikeRouter = express.Router()

LikeRouter.route('/like').get(Getlikes).post(CreateLike).delete(Deletelike)

export default LikeRouter