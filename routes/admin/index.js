const express = require("express");
const route = express.Router();
const upload = require("../../middlewares/upload");

// Register router : /camping/api/admin/register
// route.post("/register", require("./register"));

// Login router : /camping/api/admin/login
route.post("/login", require("./login"));

// Get camps : /camping/api/admin/camps
route.get("/camps", require("./getCamps"));

// Add camp : /camping/api/admin/addCamp
route.post("/addCamp", upload.single("photo"), require("./addCamp"));

// Update camp : /camping/api/admin/updateCamp
route.put("/updateCamp", require("./updateCamp"));

// Update camp photo : /camping/api/admin/updateCampPhoto
route.put(
  "/updateCampPhoto",
  upload.single("photo"),
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

// remove single user : /camping/api/admin/removeUser
route.delete("/removeUser", require("./removeUser"));

module.exports = route;
