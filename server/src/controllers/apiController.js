
const db=require('../database/models')


module.exports ={
    listGestores: async function(req,res){

        try {
            const gestores= await db.Gestores.findAll({attributes:{exclude:['password']}})
            return res.json(gestores)
        } catch (error) {
            console.log(error);
        }
    },
     listClientes:async function(req,res){
        try {
          const clientes=await db.Clientes.findAll()
          return res.json(clientes)  
        } catch (error) {
            console.log(error);
        }
     }




}