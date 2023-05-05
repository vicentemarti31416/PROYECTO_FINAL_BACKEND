const express = require("express");

const router = express.Router();

const {
    getOffers,
    getOffersById,
    createOffers,
    modifyOffers,
    deleteOffers
} = require("../controllers/offers.controller");

router.get("/:id", getOffersById);
router.get("/", getOffers);
router.post("/", createOffers);
router.put("/:id", modifyOffers);
router.delete("/:id", deleteOffers);

module.exports = router;