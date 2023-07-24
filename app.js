// console.log("Hola mundo");
require('dotenv').config();
const Server = require('./models/server');

// const express = require('express');
// const app=express();

// app.get('/', (req, res) => {
//     res.send("hola mundo");
// });

// app.listen(process.env.PORT, ()=>{
//     console.log("Servidor corriendo en puerto",process.env.PORT)
// });

const server = new Server();

server.listen();