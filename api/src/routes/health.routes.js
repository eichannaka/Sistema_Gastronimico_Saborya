const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ ok: true, service: "saborya-api" });
});

module.exports = router;