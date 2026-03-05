const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "movimientoscaja",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      caja_id: { type: DataTypes.INTEGER, allowNull: false },
      tipo: { type: DataTypes.ENUM("INGRESO", "EGRESO"), allowNull: false },
      monto: { type: DataTypes.DECIMAL(12, 2), allowNull: false },
      descripcion: { type: DataTypes.STRING(255), allowNull: true },
      medio_pago: {
        type: DataTypes.ENUM("EFECTIVO", "TARJETA", "TRANSFERENCIA", "MP"),
        allowNull: false,
        defaultValue: "EFECTIVO",
      },
      creado_en: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    },
    { timestamps: false }
  );
};