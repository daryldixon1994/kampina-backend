const User = require("../../models/User");
const fs = require("fs");
const path = require("path");
module.exports = async (req, res) => {
  try {
    let { id } = req.auth;
    let { email } = req.body;
    if (email) {
      let existedUser = await User.findOne({ email });
      if (existedUser) {
        return res.status(401).json({
          status: false,
          error: "This email is already existed, please use another one",
        });
      }
    }
    const newUser = await User.findByIdAndUpdate(
      id,
      {
        $set: { ...req.body },
      },
      { new: true }
    );
    res
      .status(200)
      .json({ status: true, message: "Infos has been updated", data: newUser });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
