module.exports = (sequelize, dataTypes) => {
  let alias = "Concesionarios";
  let cols = {
    id: {
      type: dataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      unsigned: true,
    },
    nombre: {
      type: dataTypes.STRING,
    },
    provincia: {
      type: dataTypes.STRING,
    },
    cuit: {
      type: dataTypes.BIGINT,
    },
    contacto: {
      type: dataTypes.BIGINT,
    },
  };
  let config = {
    tableName: "Concesionario",
    timestamps: false,
    freezeTableName: true,
  };
  const Concesionario = sequelize.define(alias, cols, config);
  Concesionario.associate = function (models) {
    Concesionario.hasMany(models.Vehiculos, {
      foreignKey: "id_concesionario",
      as: "Vehiculos",
    });
  };
   return Concesionario
};
