const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "roles",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      nombre: { type: DataTypes.STRING(50), allowNull: false, unique: true },
      permisos: { type: DataTypes.JSON, allowNull: false },
    },
    { timestamps: false }
  );
};