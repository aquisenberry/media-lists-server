import express from 'express'
import {getPopularVideoGames} from '../controllers/videoGames.js'
const router = express.Router()


router.get('/popular', getPopularVideoGames)

export default router