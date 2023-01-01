const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send("hi");
});

app.listen(5000);
