const Camp = require("../../models/Camp");
const fs = require("fs");
const path = require("path");
module.exports = async (req, res) => {
  try {
    console.log(req.file);
    let { campId } = req.query;
    const imgBuffer = fs.readFileSync(
      path.join(
        "D:/Dévelopement WEB/campapp/backend/",
        "uploads",
        req.file.filename
      )
    );
    const base64Image = await imgBuffer.toString("base64");
    const newCamp = await Camp.findByIdAndUpdate(
      campId,
      {
        $set: { imgUrl: base64Image },
      },
      { new: true }
    );
    res.status(200).json({ status: true, message: "Photo has been updated" });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
