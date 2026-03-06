require("dotenv").config();
const bcrypt = require("bcrypt");
const { sequelize, Usuario } = require("../models");

async function run() {
  try {
    await sequelize.authenticate();

    const pass = "123456"; // password demo
    const hash = await bcrypt.hash(pass, 10);

    // setear el mismo pass a los 3 usuarios demo
    await Usuario.update({ password_hash: hash }, { where: {} });

    console.log("✅ Passwords actualizados. Password demo:", pass);
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

run();