
const { Association } = require('sequelize');
const db=require('../database/models')


module.exports ={
//   GESTORES CONTROLADORES
    listGestores: async function(req,res){

        try {
            const gestores= await db.Gestores.findAll({attributes:{exclude:['password']}})
            return res.json(gestores)
        } catch (error) {
            console.log(error);
        }
    },
gestorDetail: async function(req,res){
    try {
        const gestorDetail=await db.Gestores.findByPk(req.params.id)
        return res.json(gestorDetail)
    } catch (error) {
        console.log(error);
    }
},
createGestor: async function(req,res){
    try {
        console.log(req.body);
        const nuevoGestor= await db.Gestores.create(req.body)
        res.json({status:200,msg:'gestor creado con exito!!'})
    } catch (error) {
        console.log(error);
    }
},
gestorEdit:async function(req,res){
    try {
        const gestorActualizado=req.body.nombre
        await db.Gestores.update({nombre:gestorActualizado},{where:{id:req.params.id}})
        console.log(gestorActualizado);
        res.json('gestor actualizado con exito !')
    } catch (error) {
        console.log(error);
    }
},



// CLIENTES CONTROLADORES

     listClientes:async function(req,res){
        try {
          const clientes=await db.Clientes.findAll({include:[{association:'Gestores'}]})
          
          return res.json(clientes)  
        } catch (error) {
            console.log(error);
        }

        
     },
     clientesDetail:async function(req,res){
        try {
            const clientesDetail=await db.Clientes.findByPk(req.params.id)
            return res.json(clientesDetail)
        } catch (error) {
            console.log(error);
        }
     },
     createCliente: async function(req,res){
        try {
            console.log(req.body);
            const nuevoCliente= await db.Clientes.create(req.body)
            res.json({status:200,msg:'cliente creado con exito!!'})
        } catch (error) {
            console.log(error);
        }
    },
    clienteEdit:async function (req,res){
       try {
        const clienteActualizado=req.body
        await db.Clientes.update({...clienteActualizado},{where:{id:req.params.id}})
        console.log(clienteActualizado);
        res.json('cliente actualizado con exito !')
       } catch (error) {
        console.log(error);
       }
    }




}