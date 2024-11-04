const express = require("express");
const app = express();
const indexRouter = require("../../routes/index");
const usersRouter = require("../../routes/users");
const postsRouter = require("../../routes/posts");
const systemRouter = require("../../routes/system");

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use(systemRouter);

module.exports = app;