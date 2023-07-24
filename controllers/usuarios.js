const {response, request} = require('express');

const usuariosGet = (req=request, res=response)=>{
    
        // res.send("hola mundo");
        // res.json("hola mundo");
        // res.json({
        //     ok: true,
        //     msg:'get API'
        // });

        // const query = req.query;
        const {q,nombre='No name',apikey , page=1, limit} = req.query;
        res.json({
            msg: 'get API- Controller',
            // query
            q,
            nombre,
            apikey,
            page,
            limit

        });
 }
const usuariosPost = (req, res=response)=>{
        const{nombre,edad} = req.body;
            res.status(200).json({
            msg: 'Post API - Controller',
            nombre,
            edad
        });
   }
const usuariosPut = (req, res=response)=>{
            const {id }=req.params;
            res.status(200).json({
            msg: 'Put API - Controller',
            id
        });
   }
const usuariosPatch = (req, res=response)=>{
            res.status(200).json({
            msg: 'Patch API - Controller'
        });
   }
const UsuariosDelete = (req, res=response)=>{
            res.status(200).json({
            msg: 'Delete API - Controller'
        });
   }



module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    UsuariosDelete
}