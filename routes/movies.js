import express from 'express'
import {getPopularMovies, getMovies} from '../controllers/movies.js'
const router = express.Router()


router.get('/search',getMovies)
router.get('/popular', getPopularMovies)

export default router