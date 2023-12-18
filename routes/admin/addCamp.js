const Camp = require("../../models/Camp");
const fs = require("fs");
const path = require("path");
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
    console.log(req.body);
    const imgUrl = `${req.protocol}://${req.headers.host}/file/${req.file.filename}`;
    console.log(imgUrl);
    if (
      req.file &&
      req.body.title &&
      req.body.limiteParticipant &&
      req.body.region &&
      req.body.city &&
      req.body.place &&
      req.body.date &&
      req.body.price &&
      req.body.desc &&
      req.body.period
    ) {
      // const imgBuffer = fs.readFileSync(
      //   path.join(
      //     "D:/Dévelopement WEB/campapp/backend/",
      //     "uploads",
      //     req.file.filename
      //   )
      // );
      // const base64Image = await imgBuffer.toString("base64");
      const imgUrl = `${req.protocol}://${req.headers.host}/file/${req.file.filename}`;
      const newCamp = await new Camp({
        title,
        limiteParticipant,
        place,
        date,
        region,
        city,
        price,
        period,
        imgUrl,
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
