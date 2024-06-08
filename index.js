import express from 'express';
import routes from './routes/router.js'
import expressFileUpload from 'express-fileupload'
const app = express();
const PORT = process.env.PORT || 3000;



//Middlewares
app.use(expressFileUpload({
    limits: { fileSize: 1000000 },
    abortOnLimit: true,
    responseOnLimit: 'El archivo que seleccionaste es demasiado grande',
}))

//Routes
app.use('/', routes)


app.listen(PORT, () => console.log(`Example app listening on port http://localhost:${PORT}`));