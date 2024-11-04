const express = require("express");
const path = require("path");

const app = require("./controllers/core");
const router = require("./controllers/router");

const cache = require("./controllers/cache");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(express.static(path.join(__dirname, "public")));
app.use(router);

cache.start();

module.exports = app;
