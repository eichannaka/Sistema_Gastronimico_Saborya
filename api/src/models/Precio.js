const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "precios",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      producto_id: { type: DataTypes.INTEGER, allowNull: false },
      precio: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
      fecha_inicio: { type: DataTypes.DATEONLY, allowNull: false },
      fecha_fin: { type: DataTypes.DATEONLY, allowNull: true },
    },
    { timestamps: false }
  );
};