require("dotenv").config();
// require("./src/server/config/database");
const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routing files
app.use(require ("./src/server/routes/route"));


const Port = process.env.PORT || 5000;

app.listen(Port, () => {
  console.log(`server is listening on port ${Port}`);
});