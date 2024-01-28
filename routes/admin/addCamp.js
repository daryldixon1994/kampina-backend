const Camp = require("../../models/Camp");
const cloudinary = require("../../middlewares/cloudinary");
const fs = require("fs");
// const path = require("path");
module.exports = async (req, res) => {
  try {
    let {
      title,
      limiteParticipant,
      region,
      city,
      place,
      date,
      price,
      desc,
      period,
    } = req.body;
    // console.log(req.body);
    // const imgUrl = `${req.protocol}://${req.headers.host}/file/${req.file.filename}`;
    if (
      req.file &&
      title &&
      limiteParticipant &&
      region &&
      city &&
      place &&
      date &&
      price &&
      desc &&
      period
    ) {
      // const imgBuffer = fs.readFileSync(
      //   path.join(
      //     "D:/Dévelopement WEB/campapp/backend/",
      //     "uploads",
      //     req.file.filename
      //   )
      // );
      // const base64Image = await imgBuffer.toString("base64");
      console.log("add :", req.header);
      const uploader = async (path) =>
        await cloudinary.uploads(path, "uploads");
      let { path } = file;
      const { url } = uploader(path);
      fs.unlinkSync(path);

      const newCamp = await new Camp({
        title,
        limiteParticipant,
        place,
        date,
        region,
        city,
        price,
        period,
        imgUrl: url,
        desc,
      });
      await newCamp.save();
      return res
        .status(200)
        .json({ status: true, message: "Event has been added successfully" });
    } else {
      return res.status(204).json({
        status: false,
        error: "Something went wrong! Please check again",
      });
    }
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
