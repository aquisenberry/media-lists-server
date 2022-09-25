import express from 'express'
import {getPopularShows, getShows, getShowDetails} from '../controllers/shows.js'
const router = express.Router()

router.get('/search',getShows)
router.get('/popular', getPopularShows)
router.get('/details', getShowDetails)

export default router