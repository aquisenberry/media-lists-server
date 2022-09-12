import express from 'express'
import {getShows} from '../controllers/shows.js'
const router = express.Router()

router.get('/', getShows)

export default router