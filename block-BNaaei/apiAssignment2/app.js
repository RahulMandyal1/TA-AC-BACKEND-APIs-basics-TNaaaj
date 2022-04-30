const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
// establishing  the connection between the application and the server
mongoose.connect("mongodb://127.0.0.1:27017/makeapi", (err) => {
  console.log(err ? err : "Connection is made sucessfully");
});

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const countryRouter = require("./routes/country");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/country", countryRouter);

module.exports = app;
