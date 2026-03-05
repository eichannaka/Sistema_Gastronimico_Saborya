const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "detalleventas",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      venta_id: { type: DataTypes.INTEGER, allowNull: false },
      producto_id: { type: DataTypes.INTEGER, allowNull: false },
      precio_unitario: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
      cantidad: { type: DataTypes.INTEGER, allowNull: false },
      subtotal: { type: DataTypes.DECIMAL(12, 2), allowNull: false },
    },
    { timestamps: false }
  );
};