const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
var cors = require("cors");
require("dotenv").config();
const URI = process.env.URI;
const PORT = process.env.PORT || 5000;

// database connection
mongoose
  .connect(`${URI}`)
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
    console.log("could not connect to database");
  });

// global middlewares
app.use(express.json());
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     preflightContinue: false,
//     optionsSuccessStatus: 204,
//   })
// );
app.use(function (req, res, next) {
  req.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  req.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// user routes
app.use("/camping/api", require("./routes/user"));

// admin routes
app.use("/camping/api/admin", () => {
  console.log("server:",req.header);
} , require("./routes/admin"));

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`SERVER IS UP AND RUNNING ON ${PORT}`);
});
