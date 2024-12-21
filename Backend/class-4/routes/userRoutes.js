const express = require("express");

const {
  registerUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

// Create
router.post("/register", registerUser);

// Read All
router.get("/", getAllUsers);

// Read By ID
router.get("/:id", getUserById);

// Update
router.patch("/:id", updateUser);

// Delete
router.delete("/:id", deleteUser);

module.exports = router;
