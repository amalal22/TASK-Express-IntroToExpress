const express = require("express");
const app = express();
const data = require("./data");
app.get("/api/products", (req, res) => {
  console.log("first");
  return res.json(data);
});

app.put("/hi", (req, res) => {
  console.log("first");
  return res.json("hi from bacend");
});
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`i am runing on port ${PORT}`);
});
