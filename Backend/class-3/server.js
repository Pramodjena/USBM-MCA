// import
const express = require("express");
require("dotenv").config();
const fs = require("fs");
const { json } = require("stream/consumers");

const app = express();

// middleware
app.use(express.json());

// helper function
const read = () => {
  const data = fs.readFileSync("data.json");
  return JSON.parse(data);
};

const write = (data) => {
  fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
};

app.get("/", (req, res) => {
  res.status(201).send({ msg: "Home Page" });
});
app.get("/contact", (req, res) => {
  res.status(201).send({ msg: "Contact Page" });
});
app.get("/service", (req, res) => {
  res.status(201).send({ msg: "Service Page" });
});
app.get("/products", (req, res) => {
  const data = read();
  res.status(201).send({ products: data });
});

app.post("/add-product", (req, res) => {
  const data = read();
  const { name, price } = req.body;
  const newProduct = {
    id: data.length + 1,
    name,
    price,
  };
  data.push(newProduct);
  write(data);
  res.status(201).send({ msg: "Product Added" });
});
app.put("/update-product/:id", (req, res) => {
  const data = read();
  const id = req.params.id;
  const { name, price } = req.body;
  const productIndex = data.findIndex((product) => product.id === parseInt(id));
  if (productIndex !== -1) {
    data[productIndex].name = name;
    data[productIndex].price = price;
    write(data);
    res.status(201).send({ msg: "Product Updated" });
  } else {
    res.status(404).send({ msg: "Product Not Found" });
  }
});
app.delete("/delete-product/:id", (req, res) => {
  const data = read();
  const id = req.params.id;
  const newProduct = data.filter((product) => product.id !== parseInt(id));
  if (data.length === newProduct.length) {
    return res.status(404).json({ message: "Product not found" });
  }
  write(newProduct);
  res.status(201).send({ msg: "Product Deleted" });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
