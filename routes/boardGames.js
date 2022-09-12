import express from 'express'
import { getPopularBoardGames } from '../controllers/boardGames.js'
const router = express.Router()


router.get('/popular', getPopularBoardGames)

export default router