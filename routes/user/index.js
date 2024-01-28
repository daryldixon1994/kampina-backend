const express = require("express");
const route = express.Router();
const multer = require("../../middlewares/upload");
const verifyToken = require("../../middlewares/verifyToken");
// Register router : /camping/api/register
route.post("/register", require("./register"));

// Login router : /camping/api/login
route.post("/login", require("./login"));

// join camp : /camping/api/join
route.put("/join", verifyToken, require("./joinCamp"));

// leave camp : /camping/api/leave
route.put("/leave", verifyToken, require("./leaveCamp"));

// get camps : /camping/api/camps
route.get("/camps", verifyToken, require("./getCamps"));

// get own camps : /camping/api/myCamps
route.get("/myCamps", verifyToken, require("./getOwnCamps"));

// get own camps : /camping/api/profile
route.get("/profile", verifyToken, require("./getProfile"));

// update photo : /camping/api/updateImage
route.put(
  "/updateImage",
  verifyToken,
  multer.single("photo"),
  require("./updateImage")
);

// update infos : /camping/api/updateInfos
route.put("/updateInfos", verifyToken, require("./updateInfos"));

// update password : /camping/api/updatePassword
route.put("/updatePassword", verifyToken, require("./updatePassword"));

module.exports = route;