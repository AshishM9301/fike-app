const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();

app.use(express.json());

const db = process.env.MONGOURI;

mongoose
  .connect(db)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Error: ", err));

// app.use("/api/items", require("./routes/api/items"));
app.use("/api/user", require("./routes/api/users"));
// app.use("/api/auth", require("./routes/api/auth"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server Started ${port}`));
// app.listen(3000);
