import express from 'express'
import { getPopularBooks,getBooks,getBookDetails } from '../controllers/books.js'
const router = express.Router()

router.get('/search',getBooks)
router.get('/popular', getPopularBooks)
router.get('/details', getBookDetails)

export default router