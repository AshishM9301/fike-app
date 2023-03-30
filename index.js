const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

require("dotenv").config();

app.use(cors());

app.use(express.json());

const db = process.env.MONGOURI;

mongoose
  .connect(db)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Error: ", err));

app.use("/", require("./routes"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server Started ${port}`));
// app.listen(3000);
