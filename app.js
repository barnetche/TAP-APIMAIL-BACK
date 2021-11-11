const express = require("express");
const cors = require("cors")
const {json} = require("body-parser");
const createMail = require("./routes/new")

const app = express()

app.use(cors())

app.use(json());

app.use(createMail);

module.exports = app;