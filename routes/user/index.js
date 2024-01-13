const express = require("express");
const route = express.Router();
const multer = require("../../middlewares/upload");

// Register router : /camping/api/register
route.post("/register", require("./register"));

// Login router : /camping/api/login
route.post("/login", require("./login"));

// join camp : /camping/api/join
route.put("/join", require("./joinCamp"));

// leave camp : /camping/api/leave
route.put("/leave", require("./leaveCamp"));

// get camps : /camping/api/camps
route.get("/camps", require("./getCamps"));

// get own camps : /camping/api/myCamps
route.get("/myCamps", require("./getOwnCamps"));

// get own camps : /camping/api/profile
route.get("/profile/:id", require("./getProfile"));

// update photo : /camping/api/updateImage
route.put("/updateImage", require("./updateImage"));

// update infos : /camping/api/updateInfos
route.put("/updateInfos/:id", require("./updateInfos"));

// update password : /camping/api/updatePassword
route.put("/updatePassword/:id", require("./updatePassword"));

module.exports = route;
