const express = require("express");
const route = express.Router();
const multer = require("../../middlewares/multer");

// Register router : /camping/api/admin/register
// route.post("/register", require("./register"));

// Login router : /camping/api/admin/login
route.post("/login", require("./login"));

// Get camps : /camping/api/admin/camps
route.get("/camps", require("./getCamps"));

// Add camp : /camping/api/admin/addCamp
route.post("/addCamp", multer.single("photo"), require("./addCamp"));

// Update camp : /camping/api/admin/updateCamp
route.put("/updateCamp", require("./updateCamp"));

// Update camp photo : /camping/api/admin/updateCampPhoto
route.put(
  "/updateCampPhoto",
  multer.single("photo"),
  require("./updateCampPhoto")
);

// Delete camp : /camping/api/admin/deleteCamp
route.delete("/deleteCamp", require("./deleteCamp"));

// Close camp : /camping/api/admin/closeCamp
route.put("/closeCamp", require("./closeCamp"));

// Cancel camp : /camping/api/admin/cancelCamp
route.put("/cancelCamp", require("./cancelCamp"));

// Postpone camp : /camping/api/admin/postPoneCamp
route.put("/postPoneCamp", require("./postPoneCamp"));

// Get users : /camping/api/admin/users
route.get("/users", require("./getUsers"));

// Get single user : /camping/api/admin/user
route.get("/user", require("./getUser"));

module.exports = route;
