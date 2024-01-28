const User = require("../../models/User");
const fs = require("fs");
const path = require("path");
const cloudinary = require("../../middlewares/cloudinary");

module.exports = async (req, res) => {
  try {
    let { userId } = req.query;
    // const imgBuffer = fs.readFileSync(
    //   path.join(
    //     "D:/Dévelopement WEB/campapp/backend/",
    //     "uploads",
    //     req.file.filename
    //   )
    // );
    // const base64Image = await imgBuffer.toString("base64");
    const imgUrl = `/uploads/${req.file.filename}`;
    await User.findByIdAndUpdate(
      userId,
      {
        $set: { imgUrl },
      },
      { new: true }
    );
    res.status(200).json({ status: true, message: "Photo has been updated" });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
