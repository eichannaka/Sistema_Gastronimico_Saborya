const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "gastos",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      proveedor_id: { type: DataTypes.INTEGER, allowNull: false },
      caja_id: { type: DataTypes.INTEGER, allowNull: false },
      fecha: { type: DataTypes.DATEONLY, allowNull: false },
      importe: { type: DataTypes.DECIMAL(12, 2), allowNull: false },
      medio_pago: {
        type: DataTypes.ENUM("EFECTIVO", "TARJETA", "TRANSFERENCIA", "MP"),
        allowNull: false,
        defaultValue: "EFECTIVO",
      },
      tipo_comprobante: { type: DataTypes.STRING(50), allowNull: true },
      numero_comprobante: { type: DataTypes.STRING(50), allowNull: true },
      comentario: { type: DataTypes.STRING(255), allowNull: true },
      adeudado: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    },
    { timestamps: false }
  );
};