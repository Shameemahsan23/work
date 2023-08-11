import express from 'express'

import {postResult} from '../controllers/post.js'

const router = express.Router()

router.post("/", postResult)


export default router