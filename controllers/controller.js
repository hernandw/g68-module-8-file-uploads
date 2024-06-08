import path from 'path'
import fs from 'fs'
const __dirname = path.resolve()

export const home = (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
}

export const images = (req, res) => {
    res.sendFile(__dirname + '/views/imagenes.html')
}

export const deleteimages = async(req, res) => {
try {
    const { nombre } = req.params
await fs.unlinkSync(`${__dirname}/public/imagenes/${nombre}.jpg`)

    res.send('Imagen ${nombre} eliminada correctamente')

} catch (error) {
    console.log(error)
}

}

export const uploads = (req, res) => {

    try {
        const { foto } = req.files
        const { name } = foto
        foto.mv(`${__dirname}/uploads/${name}`, err => {
            if (err) {
                res.estatus(500).send(err)
            }
            res.send('Archivo subido correctamente')
        })
    } catch (error) {
        res.estatus(500).send(error)
    }
}

export const cancion = (req, res) => {
    const { cancion } = req.files
    const {nombre, artista, album} = req.body
    const name = `${nombre}-${artista}-${album}.mp3`

    cancion.mv(`${__dirname}/canciones/${name}`, err => {
        if (err) {
            res.estatus(500).send(err)
        }
        res.send('Cancion subida correctamente')
    })
}