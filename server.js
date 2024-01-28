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
var allowlist = ["http://localhost:3000", "https://kampina.netlify.app/"];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};
app.use(cors(corsOptionsDelegate));
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// user routes
app.use("/camping/api", require("./routes/user"));

// admin routes
app.use("/camping/api/admin", require("./routes/admin"));

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`SERVER IS UP AND RUNNING ON ${PORT}`);
});
