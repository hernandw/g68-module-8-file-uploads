import express from 'express';
import {home, uploads} from '../controllers/controller.js'
const router = express.Router()

router.get('/', home)

router.post('/upload', uploads)




export default router