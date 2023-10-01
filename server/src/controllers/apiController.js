const db=require('../database/models');



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
    },

// concesionarios 

listConsecionarios: async function(req,res){
    try {
       const concesionarios= await db.Concesionarios.findAll()
        return res.json(concesionarios)
    } catch (error) {
        console.log(error);
    }
},
concesionarioDetail: async function(req,res){

try {
    const concesionarios= await db.Concesionarios.findByPk(req.params.id)
    return res.json(concesionarios)
} catch (error) {
    console.log(error);
}



},

concesionarioCreate:async function(req,res){
    try {
        const nuevoConcesionario= await db.Concesionarios.create(req.body)
        res.json({status:200,msg:'consecionario creado con exito!!'})

    } catch (error) {
        console.log(error);
    }
},
concesionarioEditar: async function(req,res){
    const concesionarioActualizado=req.body
    try {
        const concesionarioEditar= await db.Concesionarios.update({...concesionarioActualizado},{where:{id:req.params.id}})
        return res.json()
    } catch (error) {                                      
        console.log(error);
    }
},
//tickets

ticketCreate:async function(req,res){
    try {
        console.log(req.body)
        const nuevoTicket= await db.Tickets.create(req.body)
        res.json({status:200,msg:'Ticket creado con exito!!'})
    } catch (error) {
        console.log(error);
    }
},
listTicket: async function(req,res){
    try {
       const concesionarios= await db.Tickets.findAll()
        return res.json(concesionarios)
    } catch (error) {
        console.log(error);
    }
},
ticketDetail: async function(req,res){

try {
    const concesionarios= await db.Tickets.findByPk(req.params.id)
    return res.json(concesionarios)
} catch (error) {
    console.log(error);
}



},
ticketEditar: async function(req,res){
    const ticketAcutalizado=req.body
    try {
        const ticketEditar= await db.Ticket.update({...ticketAcutalizado},{where:{id:req.params.id}})
        return res.json()
    } catch (error) {                                      
        console.log(error);
    }
},

// vehiculos controller

vehiculosList:async function(req,res){
    try {
        const listaVehiculos =await  db.Vehiculos.findAll();
        return res.json(listaVehiculos)
    } catch (error) {
        console.log(error);
    }
},
vehiculoCreate: async function(req,res){
    try {
        const createVehiculo=await db.Vehiculos.create(req.body)
        return res.json(createVehiculo)
    } catch (error) {
        console.log(error);
    }
}


}