const Camp = require("../../models/Camp");

module.exports = async (req, res) => {
  try {
    let { id, campId } = req.query;
    let existedUser = await Camp.findOne({ users: id });

    if (existedUser) {
      return res.status(204).json({
        status: true,
        message: "You've already joined one of our events",
      });
    }
    const campJoined = await Camp.findOneAndUpdate(
      { _id: campId },
      {
        $push: { users: id },
      },
      { new: true }
    );
    res
      .status(200)
      .json({ status: true, data: campJoined, message: "Joined successfully" });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
