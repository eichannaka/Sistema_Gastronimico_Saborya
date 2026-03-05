const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "ventas",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      mesa_id: { type: DataTypes.INTEGER, allowNull: false },
      cliente_id: { type: DataTypes.INTEGER, allowNull: true },
      usuario_id: { type: DataTypes.INTEGER, allowNull: false },
      hora_inicio: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
      hora_fin: { type: DataTypes.DATE, allowNull: true },
      estado: {
        type: DataTypes.ENUM("ABIERTA", "CERRADA", "CANCELADA"),
        allowNull: false,
        defaultValue: "ABIERTA",
      },
      total: { type: DataTypes.DECIMAL(12, 2), allowNull: false, defaultValue: 0 },
      descuento: { type: DataTypes.DECIMAL(12, 2), allowNull: false, defaultValue: 0 },
      pago_parcial: { type: DataTypes.DECIMAL(12, 2), allowNull: false, defaultValue: 0 },
    },
    { timestamps: false }
  );
};