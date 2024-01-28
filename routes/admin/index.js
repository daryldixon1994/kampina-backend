const express = require("express");
const route = express.Router();
const upload = require("../../middlewares/upload");
const verifyToken = require("../../middlewares/verifyToken");
// Register router : /camping/api/admin/register
route.post("/register", require("./register"));

// Login router : /camping/api/admin/login
route.post("/login", require("./login"));

// Get camps : /camping/api/admin/camps
route.get("/camps", verifyToken, require("./getCamps"));

// Add camp : /camping/api/admin/addCamp
route.post(
  "/addCamp",
  verifyToken,
  upload.single("photo"),
  require("./addCamp")
);
// Update camp : /camping/api/admin/updateCamp
route.put("/updateCamp", verifyToken, require("./updateCamp"));

// Update camp photo : /camping/api/admin/updateCampPhoto
route.put(
  "/updateCampPhoto",
  verifyToken,
  upload.single("photo"),
  require("./updateCampPhoto")
);

// Delete camp : /camping/api/admin/deleteCamp
route.delete("/deleteCamp", verifyToken, require("./deleteCamp"));

// Close camp : /camping/api/admin/closeCamp
route.put("/closeCamp", verifyToken, require("./closeCamp"));

// Cancel camp : /camping/api/admin/cancelCamp
route.put("/cancelCamp", verifyToken, require("./cancelCamp"));

// Postpone camp : /camping/api/admin/postPoneCamp
route.put("/postPoneCamp", verifyToken, require("./postPoneCamp"));

// Get users : /camping/api/admin/users
route.get("/users", verifyToken, require("./getUsers"));

// Get single user : /camping/api/admin/user
route.get("/user", verifyToken, require("./getUser"));

// remove single user : /camping/api/admin/removeUser
route.delete("/removeUser", verifyToken, require("./removeUser"));

module.exports = route;
