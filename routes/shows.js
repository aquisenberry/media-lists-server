import express from 'express'
import {getPopularShows, getShows} from '../controllers/shows.js'
const router = express.Router()

router.get('/search',getShows)
router.get('/popular', getPopularShows)

export default router