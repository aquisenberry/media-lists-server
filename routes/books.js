import express from 'express'
import { getPopularBooks } from '../controllers/books.js'
const router = express.Router()


router.get('/popular', getPopularBooks)

export default router