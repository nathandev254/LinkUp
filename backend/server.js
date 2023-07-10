import express from 'express'
import UserRoute from './routes/UserRoute.js'
import cors from 'cors'

const app = express()

// express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/', UserRoute )

const PORT = 8081

app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`)
})
