import path from 'path'
const __dirname = path.resolve()

export const home = (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
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