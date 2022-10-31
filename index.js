const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello From backend!");
});

app.listen(port, () => {
  console.log(`App is running on port, ${port}`);
});
