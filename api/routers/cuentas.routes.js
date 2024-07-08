const express = require("express");

const router = express.Router();

const {
    getCuentas,
    getCuentasById,
    createCuentas,
    modifyCuentas,
    deleteCuentas
} = require("../controllers/cuentas.controller");

router.get("/:id", getCuentasById);
router.get("/", getCuentas);
router.post("/", createCuentas);
router.put("/:id", modifyCuentas);
router.delete("/:id", deleteCuentas);

module.exports = router;