const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "mesas",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      nombre_numero: { type: DataTypes.STRING(50), allowNull: false, unique: true },
      ubicacion: { type: DataTypes.STRING(100), allowNull: true },
      capacidad: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 2 },
    },
    { timestamps: false }
  );
};