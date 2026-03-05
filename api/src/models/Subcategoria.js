const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "subcategorias",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      categoria_id: { type: DataTypes.INTEGER, allowNull: false },
      nombre: { type: DataTypes.STRING(100), allowNull: false },
    },
    { timestamps: false }
  );
};