const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const Grid = require("gridfs-stream");
const connection = require("./connect");
//ENVIRONMENT VARIABLES
const mongoURI =
  "mongodb+srv://gmcws2024:gomycode2024@cluster0.4dmpkdc.mongodb.net/camping-app?retryWrites=true&w=majority";
const conn = mongoose.createConnection(mongoURI, { useNewUrlParser: true });
// CONNECT TO DATABASE
// connection();
// const conn = mongoose.connection;
let gfs;

//MIDDLEWARES
// app.use(express.json());

conn.once("open", () => {
  gfs = Grid(conn, mongoose.mongo);
  gfs.collection("photos");
});

const PORT = process.env.PORT || 7466;
// user routes
// app.use("/camping/api", require("./routes/user"));
// admin routes
app.use("/camping/api/admin", require("./routes/admin"));

// app.use((req, res) => {
//   res.send("API IS RUNNING...");
// });

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("SERVER IS UP AND RUNNING on PORT");
});
