const express = require('express');
const cors = require('cors');
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usuarioPath= '/api/usuarios';

        // middleware
        this.middleware();
        // rutas de mi aplicacion
        this.routes();
    }

    middleware() {
        // cors
        this.app.use(cors());
        // lectura y parseo del body
        this.app.use(express.json());
        // directorio publico
        this.app.use(express.static('public'))
    }
    // declaramos las rutas

    routes() {

        // this.app.get('/api', (req, res) => {
        //     // res.send("hola mundo");
        //     // res.json("hola mundo");
        //     // res.json({
        //     //     ok: true,
        //     //     msg:'get API'
        //     // });
        //     res.json({
        //         msg: 'get API'
        //     });
        // });
        // this.app.put('/api', (req, res) => {
        //     res.status(400).json({
        //         msg: 'get PUT'
        //     });
        // });
        // this.app.post('/api', (req, res) => {
        //     res.status(201)({
        //         msg: 'get POST'
        //     });
        // });
        // this.app.delete('/api', (req, res) => {
        //     res.json({
        //         msg: 'get Delete'
        //     });
        // });
        // this.app.patch('/api', (req, res) => {
        //     res.json({
        //         msg: 'get PATCH'
        //     });
        // });

    // usamos un middleware 
       this.app.use(this.usuarioPath, require('../routes/usuarios'));
    }

    // listen

    listen() {
        this.app.listen(this.port,'0.0.0.0', () => {
            console.log("Servidor corriendo en puerto", this.port)
        });
    }

}


module.exports = Server;
