import express from 'express'
import { getPopularBoardGames, getBoardGames,getBoardGameDetails } from '../controllers/boardGames.js'
const router = express.Router()

router.get('/search',getBoardGames)
router.get('/popular', getPopularBoardGames)
router.get('/details', getBoardGameDetails)

export default router