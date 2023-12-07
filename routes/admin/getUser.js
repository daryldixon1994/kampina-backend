const User = require("../../models/User");
module.exports = async (req, res) => {
  try {
    let { id } = req.query;
    const user = await User.findById(id).select({
      userName: 1,
      email: 1,
      imgUrl: 1,
      phone: 1,
    });
    res.status(200).json({ status: true, data: user });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
