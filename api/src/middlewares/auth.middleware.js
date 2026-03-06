const jwt = require("jsonwebtoken");
require("dotenv").config();

function requireAuth(req, res, next) {
  try {
    const header = req.headers.authorization || "";
    const [type, token] = header.split(" ");

    if (type !== "Bearer" || !token) {
      return res.status(401).json({ message: "Token requerido (Bearer)" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // decoded: { id, email, rol, iat, exp }
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido o expirado" });
  }
}

// Uso: requireRole("ADMIN") o requireRole("ADMIN", "CAJERO")
function requireRole(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user?.rol) {
      return res.status(401).json({ message: "No autenticado" });
    }
    if (!allowedRoles.includes(req.user.rol)) {
      return res.status(403).json({ message: "No autorizado" });
    }
    next();
  };
}

module.exports = { requireAuth, requireRole };