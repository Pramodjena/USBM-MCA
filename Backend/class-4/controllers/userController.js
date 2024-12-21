const user = require("../models/user");

// register user
const registerUser = async (req, res) => {
  try {
    const { name, email, age, regd, city, contact } = req.body;
    const newUser = await user.create({
      name,
      email,
      age,
      regd,
      city,
      contact,
    });
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
};

// get all user
const getAllUsers = async (req, res) => {
  try {
    const users = await user.find();
    res.status(200).json({ message: "Users fetched successfully", users });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching users", error: error.message });
  }
};

// get user by id
const getUserById = async (req, res) => {
  try {
    const existUser = await user.findById(req.params.id);
    if (!existUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User fetched successfully", existUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching users", error: error.message });
  }
};

// update user by id
const updateUser = async (req, res) => {
  try {
    const updateUser = await user.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updateUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated successfully", updateUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching users", error: error.message });
  }
};

// delete user by id
const deleteUser = async (req, res) => {
  try {
    const deleteUser = await user.findByIdAndDelete(req.params.id);
    if (!deleteUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully", deleteUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching users", error: error.message });
  }
};

module.exports = {
  registerUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
