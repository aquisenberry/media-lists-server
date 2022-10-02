import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import cache from './middleware/cache.js'

import rootRoutes from './routes/root.js'
import postRoutes from './routes/posts.js'
import movieRoutes from './routes/movies.js'
import showRoutes from './routes/shows.js'
import videoGameRoutes from './routes/videoGames.js'
import boardGameRoutes from './routes/boardGames.js'
import bookRoutes from './routes/books.js'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()


const app  = express()

const localCache = new cache()
app.set('cache',localCache)
app.use(bodyParser.json({limit:"30mb", extended: true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}))
app.use(cors())
app.get('/',rootRoutes)
app.use('/posts', postRoutes)
app.use('/movies', movieRoutes)
app.use('/shows',showRoutes)
app.use('/video-games',videoGameRoutes)
app.use('/board-games',boardGameRoutes)
app.use('/books',bookRoutes)

export default app