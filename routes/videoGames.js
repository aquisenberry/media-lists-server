import express from 'express'
import {getPopularVideoGames, getVideoGames,getVideoGameDetails} from '../controllers/videoGames.js'
const router = express.Router()

router.get('/search', getVideoGames)
router.get('/popular', getPopularVideoGames)
router.get('/details', getVideoGameDetails)


export default router