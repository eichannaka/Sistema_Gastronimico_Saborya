const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "productos",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      nombre: { type: DataTypes.STRING(150), allowNull: false },
      categoria_id: { type: DataTypes.INTEGER, allowNull: false },
      subcategoria_id: { type: DataTypes.INTEGER, allowNull: false },
      descripcion: { type: DataTypes.TEXT, allowNull: true },
      activo: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
      salida: {
        type: DataTypes.ENUM("COCINA", "BARRA", "AMBOS"),
        allowNull: false,
        defaultValue: "COCINA",
      },
      creado_en: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
      actualizado_en: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    },
    { timestamps: false }
  );
};