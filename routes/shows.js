import express from 'express'
import {getPopularShows} from '../controllers/shows.js'
const router = express.Router()

router.get('/popular', getPopularShows)

export default router