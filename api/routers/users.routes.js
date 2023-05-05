const express = require("express");

const router = express.Router();

const {
    getUsers,
    getUsersById,
    createUsers,
    modifyUsers,
    deleteUsers
} = require("../controllers/users.controller");

router.get("/:id", getUsersById);
router.get("/", getUsers);
router.post("/", createUsers);
router.put("/:id", modifyUsers);
router.delete("/:id", deleteUsers);

module.exports = router;