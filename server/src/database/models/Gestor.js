const bcryptjs=require ('bcryptjs')

module.exports=(sequelize, dataTypes)=>{
    let alias='Gestores'
    let cols={
        id:{
            type:dataTypes.BIGINT,
            primaryKey:true ,
            autoIncrement: true,
            unsigned:true 
        
        },
        nombre:{
            type:dataTypes.STRING,
            

        },
        password:{
            type:dataTypes.STRING,
            set(value){
                this.setDataValue('password',bcryptjs.hashSync(value,10))
            }
        }
       
    }
let config = {
    tableName:'Gestores',
    timestamps:false,

}
const Gestor=sequelize.define(alias,cols,config)
Gestor.associate=function (models) {
    Gestor.hasMany(models.Clientes,{
        as:'Clientes',
        foreingKey:'id_gestor'
    })
    
}


return Gestor

}