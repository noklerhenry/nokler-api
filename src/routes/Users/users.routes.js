const express = require("express");
const router = express.Router();
const {
  createUserController,
  getUserController,
  getAllUsersController,
  updateUserController,
  blockUser,
} = require("../../controllers/Users/users.controllers");

router.post("/", createUserController);
router.get("/:id", getUserController);
router.get("/", getAllUsersController);
router.put("/:id", updateUserController);
router.put("/block/:id", blockUser);




module.exports = router;
