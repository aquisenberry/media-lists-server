import express from 'express'
import {getPopularVideoGames, getVideoGames} from '../controllers/videoGames.js'
const router = express.Router()

router.get('/search', getVideoGames)
router.get('/popular', getPopularVideoGames)


export default router