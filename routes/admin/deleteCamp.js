const Camp = require("../../models/Camp");

module.exports = async (req, res) => {
  try {
    let { campId } = req.query;
    await Camp.findByIdAndDelete(campId);
    res
      .status(200)
      .json({ status: true, message: "Blog has been deleted successfully" });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
