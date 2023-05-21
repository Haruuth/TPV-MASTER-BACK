const express = require("express");

const router = express.Router();

const {
    getCocteles,
    getCoctelesById,
    createCocteles,
    modifyCocteles,
    deleteCocteles
} = require("../controllers/cocteles.controller");

router.get("/:id", getCoctelesById);
router.get("/", getCocteles);
router.post("/", createCocteles);
router.put("/:id", modifyCocteles);
router.delete("/:id", deleteCocteles);

module.exports = router;