const router = require("express").Router();
const { Producto, Categoria, Subcategoria, Precio } = require("../models");
const { Op } = require("sequelize");

// Precio vigente: fecha_inicio <= hoy AND (fecha_fin IS NULL OR fecha_fin >= hoy)
router.get("/", async (req, res) => {
  try {
    const hoy = new Date();

    const productos = await Producto.findAll({
      include: [
        { model: Categoria, attributes: ["id", "nombre"] },
        { model: Subcategoria, attributes: ["id", "nombre"] },
        {
          model: Precio,
          attributes: ["id", "precio", "fecha_inicio", "fecha_fin"],
          where: {
            fecha_inicio: { [Op.lte]: hoy },
            [Op.or]: [{ fecha_fin: null }, { fecha_fin: { [Op.gte]: hoy } }],
          },
          required: false, // si algún producto no tiene precio vigente, igual aparece
        },
      ],
      order: [["id", "ASC"]],
    });

    res.json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error obteniendo productos" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { nombre, categoria_id, subcategoria_id, descripcion, activo, salida } = req.body;

    if (!nombre || !categoria_id || !subcategoria_id) {
      return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    const nuevo = await Producto.create({
      nombre,
      categoria_id,
      subcategoria_id,
      descripcion: descripcion ?? null,
      activo: activo ?? true,
      salida: salida ?? "COCINA",
    });

    res.status(201).json(nuevo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creando producto" });
  }
});

module.exports = router;