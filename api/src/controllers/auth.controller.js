const bcrypt = require("bcrypt");
const { Usuario, Rol } = require("../models");
const { signToken } = require("../../utils/token");

async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email y password son requeridos" });
    }

    const user = await Usuario.findOne({
      where: { email },
      include: [{ model: Rol, attributes: ["id", "nombre"] }],
    });

    if (!user) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    const token = signToken({
      id: user.id,
      email: user.email,
      rol: user.rol?.nombre, // "ADMIN" | "CAJERO" | "MOZO"
    });

    return res.json({
      token,
      user: {
        id: user.id,
        nombre: user.nombre,
        email: user.email,
        rol: user.rol?.nombre,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error en login" });
  }
}

async function me(req, res) {
  // req.user viene del middleware
  return res.json({ user: req.user });
}

module.exports = { login, me };