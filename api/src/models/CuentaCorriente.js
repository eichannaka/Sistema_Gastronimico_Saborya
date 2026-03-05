const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "cuentascorrientes",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      proveedor_id: { type: DataTypes.INTEGER, allowNull: false },
      monto: { type: DataTypes.DECIMAL(12, 2), allowNull: false },
      fecha: { type: DataTypes.DATEONLY, allowNull: false },
      pagado: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
      medio_pago: {
        type: DataTypes.ENUM("EFECTIVO", "TARJETA", "TRANSFERENCIA", "MP"),
        allowNull: true,
      },
    },
    { timestamps: false }
  );
};