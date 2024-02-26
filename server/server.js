const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors({ origin: "http://localhost:5173" }));

const fs = require("fs");

app.get("/api/test", (req, res) => {
  const readfile = fs.readFileSync("./foto.json", "utf8");
  console.log(readfile);
  res.json({ message: "all good BRAA" });
});

app.listen(5000);
