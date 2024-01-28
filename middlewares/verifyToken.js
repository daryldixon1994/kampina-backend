const jwt = require("jsonwebtoken");
require("dotenv").config();
let privatekey = process.env.KEY;
module.exports = async (req, res, next) => {
  try {
    let { token, id } = req.headers;
    if (!token) {
      return res.status(400).json({ status: false, message: "Access denied" });
    }
    let test = jwt.verify(token, privatekey);
    if (!test) {
      return res.status(400).json({ status: false, message: "Invalid token" });
    }
    if (id !== test.id) {
      return res.status(400).json({ status: false, message: "Access denied" });
    }
    req.auth = { id: test.id };
    next();
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
