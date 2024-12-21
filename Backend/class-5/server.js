// import modules

const express = require("express");
const connection = require("./config/db");
const userModel = require("./model/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();

// middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ msg: "It's Working" });
});

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new userModel({ name, email, password });
    await user.save();
    res.status(201).send({ msg: "User registered successfully", user });
  } catch (error) {
    res
      .status(400)
      .send({ msg: "Error registering user", error: error.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = jwt.sign({ auth: "jwt" }, "usbm");
    const user = await userModel.find({ email, password });
    if (user.length > 0) {
      res.status(200).send({ msg: "User logged in successfully", token });
    } else {
      res.status(401).send({ msg: "Invalid email or password" });
    }
  } catch (error) {
    res.status(400).send({ msg: "Error in login user", error: error.message });
  }
});

app.get("/product", (req, res) => {
  //   const { token } = req.query;
  const token = req.headers.authorization;
  jwt.verify(token, "usbm", (err, decoded) => {
    try {
      if (decoded) {
        res.status(200).send({ msg: "Data here..." });
      } else {
        res.status(401).send({ msg: "Invalid token" });
      }
    } catch (error) {
      res.status(400).send({ msg: "Error in product", error: error.message });
    }
  });
});

// run the server
const port = process.env.PORT || 8000;
app.listen(port, async () => {
  try {
    await connection;
    console.log("Connected to database");
  } catch (error) {
    console.log(`Error connecting to database: ${error.message}`);
  }
  console.log(`Server is running on port ${port}`);
});
