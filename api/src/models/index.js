const sequelize = require("../config/database");

// Import models
const Categoria = require("./Categoria")(sequelize);
const Subcategoria = require("./Subcategoria")(sequelize);
const Producto = require("./Producto")(sequelize);
const Precio = require("./Precio")(sequelize);

const Rol = require("./Rol")(sequelize);
const Usuario = require("./Usuario")(sequelize);

const Cliente = require("./Cliente")(sequelize);
const Mesa = require("./Mesa")(sequelize);

const Venta = require("./Venta")(sequelize);
const DetalleVenta = require("./DetalleVenta")(sequelize);

const Caja = require("./Caja")(sequelize);
const MovimientoCaja = require("./MovimientoCaja")(sequelize);

const Proveedor = require("./Proveedor")(sequelize);
const Gasto = require("./Gasto")(sequelize);
const CuentaCorriente = require("./CuentaCorriente")(sequelize);

// =====================
// Associations (FKs)
// =====================

// Categorías -> Subcategorías
Categoria.hasMany(Subcategoria, { foreignKey: "categoria_id" });
Subcategoria.belongsTo(Categoria, { foreignKey: "categoria_id" });

// Categorías/Subcategorías -> Productos
Categoria.hasMany(Producto, { foreignKey: "categoria_id" });
Producto.belongsTo(Categoria, { foreignKey: "categoria_id" });

Subcategoria.hasMany(Producto, { foreignKey: "subcategoria_id" });
Producto.belongsTo(Subcategoria, { foreignKey: "subcategoria_id" });

// Productos -> Precios
Producto.hasMany(Precio, { foreignKey: "producto_id" });
Precio.belongsTo(Producto, { foreignKey: "producto_id" });

// Roles -> Usuarios
Rol.hasMany(Usuario, { foreignKey: "rol_id" });
Usuario.belongsTo(Rol, { foreignKey: "rol_id" });

// Mesas / Clientes / Usuarios -> Ventas
Mesa.hasMany(Venta, { foreignKey: "mesa_id" });
Venta.belongsTo(Mesa, { foreignKey: "mesa_id" });

Cliente.hasMany(Venta, { foreignKey: "cliente_id" });
Venta.belongsTo(Cliente, { foreignKey: "cliente_id" });

Usuario.hasMany(Venta, { foreignKey: "usuario_id" });
Venta.belongsTo(Usuario, { foreignKey: "usuario_id" });

// Ventas -> DetalleVentas
Venta.hasMany(DetalleVenta, { foreignKey: "venta_id" });
DetalleVenta.belongsTo(Venta, { foreignKey: "venta_id" });

Producto.hasMany(DetalleVenta, { foreignKey: "producto_id" });
DetalleVenta.belongsTo(Producto, { foreignKey: "producto_id" });

// Usuarios -> Caja
Usuario.hasMany(Caja, { foreignKey: "usuario_id" });
Caja.belongsTo(Usuario, { foreignKey: "usuario_id" });

// Caja -> MovimientosCaja
Caja.hasMany(MovimientoCaja, { foreignKey: "caja_id" });
MovimientoCaja.belongsTo(Caja, { foreignKey: "caja_id" });

// Proveedores -> Gastos / Cuentas corrientes
Proveedor.hasMany(Gasto, { foreignKey: "proveedor_id" });
Gasto.belongsTo(Proveedor, { foreignKey: "proveedor_id" });

Caja.hasMany(Gasto, { foreignKey: "caja_id" });
Gasto.belongsTo(Caja, { foreignKey: "caja_id" });

Proveedor.hasMany(CuentaCorriente, { foreignKey: "proveedor_id" });
CuentaCorriente.belongsTo(Proveedor, { foreignKey: "proveedor_id" });

module.exports = {
  sequelize,
  Categoria,
  Subcategoria,
  Producto,
  Precio,
  Rol,
  Usuario,
  Cliente,
  Mesa,
  Venta,
  DetalleVenta,
  Caja,
  MovimientoCaja,
  Proveedor,
  Gasto,
  CuentaCorriente,
};