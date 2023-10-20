module.exports = (sequelize, dataTypes) => {

    let alias = 'Tickets'

    let cols = {
        id: {
            type: dataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            unsigned: true

        },
        numero_servicio: {

            type: dataTypes.TINYINT

        },
        fecha_turno:{
            type:dataTypes.DATE
        },
        proveedor_service:{
            type:dataTypes.STRING
        },
        presupuesto:{
            type:dataTypes.DOUBLE(11, 10)
        },
        reparaciones:{
            type:dataTypes.STRING
        },
        estado_ticket:{
            type:dataTypes.STRING
        },
        observaciones:{
            type:dataTypes.STRING
        },
        factura:{
            type:dataTypes.STRING
        }

    }
    let config = {
        tableName: 'tickets',
        timestamps: true,
        freezeTableName: true,
    }
    const Ticket = sequelize.define(alias, cols, config)
    Ticket.associate = function (models) {
        Ticket.belongsTo(models.Concesionarios, {
            as: "Concesionarios",
            foreignKey: 'id_concesionario'

        }),
        Ticket.belongsTo(models.Gestores, {
            as: "Gestores",
            foreignKey: 'id_gestor'

        })
    Ticket.belongsTo(models.Vehiculos,{
        as:"Vehiculos",
        foreignKey:"id_vehiculo"
    })
    }


    const changeListeners = [];
    
    Ticket.addChangeListener = (listener) => {
        changeListeners.push(listener);
    }

    Ticket.emitChange = (change) => {
        changeListeners.forEach((listener) => {
            listener(change);
        });
    }

    // Observa los cambios en la base de datos y emite eventos SSE
    Ticket.afterCreate((ticket, options) => {
       console.log("Creating record");
       Ticket.emitChange({ event: "create", ticket });
   });
   
   Ticket.afterBulkUpdate((ticket, options) => {
       console.log("Updating record");
       Ticket.emitChange({ event: "update", ticket });
   });
   
   Ticket.afterBulkDestroy((ticket, options) => {
       console.log("Deleting record");
       Ticket.emitChange({ event: "delete", ticket });
   });
   Ticket.afterBulkRestore((ticket, options) => {
       console.log("Restoring record");
       Ticket.emitChange({ event: "restore", ticket });
   }) 

    return Ticket
}