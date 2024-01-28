const Camp = require("../../models/Camp");

module.exports = async (req, res) => {
  try {
    let { id } = req.auth;
    let { campId } = req.query;
    const campJoined = await Camp.findOneAndUpdate(
      { _id: campId },
      {
        $pull: { users: id },
      },
      { new: true }
    );
    res.status(200).json({ status: true, data: campJoined });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
