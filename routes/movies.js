import express from 'express'
import {getPopularMovies, getMovies, getMovieDetails} from '../controllers/movies.js'
const router = express.Router()


router.get('/search',getMovies)
router.get('/popular', getPopularMovies)
router.get('/details', getMovieDetails)

export default router