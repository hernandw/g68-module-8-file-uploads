import express from 'express';
import routes from './routes/router.js'
import expressFileUpload from 'express-fileupload'
const app = express();
const PORT = process.env.PORT || 3000;

//public static
app.use(express.static('public'))

//Middlewares
app.use(expressFileUpload({
    limits: { fileSize: 8000000 },
    abortOnLimit: true,
    responseOnLimit: 'El peso de la cancion que intentas subir supera el limite permitido',
}))

//Routes
app.use('/', routes)


app.listen(PORT, () => console.log(`Example app listening on port http://localhost:${PORT}`));