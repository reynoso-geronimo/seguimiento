

module.exports=(sequelize, dataTypes)=>{
    let alias='Clientes'
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
        cuit:{
            type : dataTypes.INTEGER,

        },
        direccion:{
            type:dataTypes.STRING,
        },
        provincia:{
            type:dataTypes.STRING,
        },
        localidad:{
            type:dataTypes.STRING,
        },
        contacto:{
            type: dataTypes.INTEGER,
        },
        nombrecontacto:{
            type:dataTypes.STRING,
        }
    }
let config = {
    tableName:'Clientes',
    timestamps:false,

}
const Cliente=sequelize.define(alias,cols,config)
Cliente.associate=function (models) {
    Cliente.belongsTo(models.Gestores,{
        as:'Gestores',
        foreingKey:'id_gestor'
    })
    
}


return Cliente

}