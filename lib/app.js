const express = require("express");
const app = express();

app.use(express.json());

app.use("/get", require("./controllers/get"));
app.use("/set", require("./controllers/set"));

module.exports = app;
