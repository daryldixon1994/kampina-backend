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
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// user routes
app.use(
  "/camping/api",
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }),
  require("./routes/user")
);

// admin routes
app.use(
  "/camping/api/admin",
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }),
  require("./routes/admin")
);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`SERVER IS UP AND RUNNING ON ${PORT}`);
});
