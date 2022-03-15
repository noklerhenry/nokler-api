const express = require("express");
const router = express.Router();
const {
  createUserController,
  getUserController,
  getAllUsersController,
  updateUserController,
} = require("../../controllers/Users/users.controllers");

router.post("/", createUserController);
router.get("/:id", getUserController);
router.get("/", getAllUsersController);
router.put("/:id", updateUserController);

module.exports = router;
