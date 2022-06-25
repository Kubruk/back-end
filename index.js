const express = require("express");
const { dbConnection } = require("./database/config");
const cors = require("cors");
require("dotenv").config();

const app = express();

dbConnection();

app.user(cors());
app.use(express.static("public"));
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));

app.listen(process.env.PORT, () => {
  console.log(`Running on port: ${process.env.PORT}`);
});
