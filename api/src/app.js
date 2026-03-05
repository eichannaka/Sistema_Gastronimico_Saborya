const express = require("express");
const cors = require("cors");
require("dotenv").config();

const productosRoutes = require("./routes/productos.routes");
const healthRoutes = require("./routes/health.routes");
const categoriasRoutes = require("./routes/categorias.routes");

// ✅ Importá TODO desde models una sola vez
const { sequelize, Producto } = require("./models");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/productos", productosRoutes);
app.use("/health", healthRoutes);
app.use("/categorias", categoriasRoutes);

async function start() {
  try {
    await sequelize.authenticate();
    console.log("✅ DB conectada OK");

    // ✅ test rápido
    const count = await Producto.count();
    console.log("✅ Productos en DB:", count);

    app.listen(process.env.PORT || 3000, () => {
      console.log(`🚀 API corriendo en puerto ${process.env.PORT || 3000}`);
    });
  } catch (err) {
    console.error("❌ Error DB:", err);
    process.exit(1);
  }
}

start();