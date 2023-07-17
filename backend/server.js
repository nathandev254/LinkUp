import express from 'express'
import UserRoute from './routes/UserRoute.js'
import PostRouter from './routes/PostRoute.js';
import cors from 'cors'
import CommentRouter from './routes/CommentRoute.js';
import LikeRouter from './routes/LikeRoute.js';

const app = express()

// express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/', UserRoute )
app.use('/', PostRouter )
app.use('/', CommentRouter )
app.use('/', LikeRouter)

const PORT = 8081

app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`)
})
