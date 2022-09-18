import express from 'express'
import { getPopularBooks,getBooks } from '../controllers/books.js'
const router = express.Router()

router.get('/search',getBooks)
router.get('/popular', getPopularBooks)

export default router