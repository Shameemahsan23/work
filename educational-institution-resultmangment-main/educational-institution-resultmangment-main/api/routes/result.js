import express from 'express'

import {getResult} from '../controllers/result.js'

const router = express.Router()

router.post("/", getResult)


export default router