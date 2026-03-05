const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "caja",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      fecha_apertura: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
      monto_inicial: { type: DataTypes.DECIMAL(12, 2), allowNull: false, defaultValue: 0 },
      fecha_cierre: { type: DataTypes.DATE, allowNull: true },
      monto_final: { type: DataTypes.DECIMAL(12, 2), allowNull: true },
      usuario_id: { type: DataTypes.INTEGER, allowNull: false },
    },
    { timestamps: false }
  );
};