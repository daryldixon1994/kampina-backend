const User = require("../../models/User");
module.exports = async (req, res) => {
  try {
    let { id } = req.auth;
    const user = await User.findById(id).select("userName email imgUrl phone");
    res.status(200).json({ status: true, data: user });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
