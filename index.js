import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'
import movieRoutes from './routes/movies.js'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()


const app  = express()

app.use(bodyParser.json({limit:"30mb", extended: true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}))
app.use(cors())
app.use('/posts', postRoutes)
app.use('/movies', movieRoutes)

const PORT = process.env.PORT || 5000
const uri = process.env.CONNECTION_STRING
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
.catch((error) => console.log(error))
