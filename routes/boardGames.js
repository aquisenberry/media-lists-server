import express from 'express'
import { getPopularBoardGames, getBoardGames } from '../controllers/boardGames.js'
const router = express.Router()

router.get('/search',getBoardGames)
router.get('/popular', getPopularBoardGames)

export default router