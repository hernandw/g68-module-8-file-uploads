import express from 'express';
import {home, uploads, cancion, images, deleteimages} from '../controllers/controller.js'
const router = express.Router()

router.get('/', home)

router.get('/images', images)

router.post('/upload', uploads)

router.post('/canciones', cancion)

router.delete('/imagen/:nombre', deleteimages)




export default router