const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "proveedores",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      nombre: { type: DataTypes.STRING(150), allowNull: false },
      email: { type: DataTypes.STRING(150), allowNull: true },
      telefono: { type: DataTypes.STRING(30), allowNull: true },
    },
    { timestamps: false }
  );
};