const Camp = require("../../models/Camp");
module.exports = async (req, res) => {
  try {
    let { id } = req.auth;
    const ownCamps = await Camp.find({ users: id }).populate(
      "users",
      "userName email imgUrl phone"
    );
    res.status(200).json({ status: true, data: ownCamps });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
