const express = require("express");

const router = express.Router();

const {
    getCervezas,
    getCervezasById,
    createCervezas,
    modifyCervezas,
    deleteCervezas
} = require("../controllers/cervezas.controller");

router.get("/:id", getCervezasById);
router.get("/", getCervezas);
router.post("/", createCervezas);
router.put("/:id", modifyCervezas);
router.delete("/:id", deleteCervezas);

module.exports = router;