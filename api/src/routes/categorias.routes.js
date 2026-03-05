const router = require("express").Router();
const { Categoria } = require("../models");

router.get("/", async (req, res) => {
  try {
    const data = await Categoria.findAll({ order: [["id", "ASC"]] });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Error leyendo categorias", detail: err.message });
  }
});

module.exports = router;