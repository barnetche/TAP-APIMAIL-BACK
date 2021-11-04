const express = require("express");
const {json} = require("body-parser");
const createMail = require("./routes/new")

const app = express()

app.use(json());

app.use(createMail);

module.exports = app;