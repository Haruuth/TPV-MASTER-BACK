const express = require("express");

const router = express.Router();

const {
    getGinebras,
    getGinebrasById,
    createGinebras,
    modifyGinebras,
    deleteGinebras
} = require("../controllers/ginebras.controller");

router.get("/:id", getGinebrasById);
router.get("/", getGinebras);
router.post("/", createGinebras);
router.put("/:id", modifyGinebras);
router.delete("/:id", deleteGinebras);

module.exports = router;