const User = require("../../models/User");

module.exports = async (req, res) => {
  try {
    let { userId } = req.query;
    await User.findByIdAndDelete(userId);
    res
      .status(200)
      .json({ status: true, message: "Blog has been deleted successfully" });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
