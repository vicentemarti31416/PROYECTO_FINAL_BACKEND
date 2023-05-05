const express = require("express");

const router = express.Router();

const {
    getCandidates,
    getCandidatesById,
    createCandidates,
    modifyCandidates,
    deleteCandidates
} = require("../controllers/candidates.controller");

router.get("/:id", getCandidatesById);
router.get("/", getCandidates);
router.post("/", createCandidates);
router.put("/:id", modifyCandidates);
router.delete("/:id", deleteCandidates);

module.exports = router;