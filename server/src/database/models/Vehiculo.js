

module.exports= (sequelize,dataTypes)=>{

let alias='Vehiculos'

let cols={
    id:{
        type:dataTypes.BIGINT,
        primaryKey:true ,
        autoIncrement: true,
        unsigned:true 
    
    },
    dominio:{
        type : dataTypes.STRING(255),

    },
    año:{
        type:dataTypes.INTEGER

    },
    modelo:{
        type:dataTypes.STRING(255)
    },
    patente:{
        type:dataTypes.STRING(255)
    },

}
let config = {
    tableName:'vehiculo',
    timestamps:false,
    freezeTableName: true,
}
const Vehiculo=sequelize.define(alias,cols,config)
Vehiculo.associate=function(models){
    Vehiculo.belongsTo(models.Concesionarios,{
        as:"Concesionarios",
        foreignKey:'id_concesionario'
        
    })
}
return Vehiculo
}