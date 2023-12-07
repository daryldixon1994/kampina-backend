const Users = require("../../models/User");
module.exports = async (req, res) => {
  try {
    const users = await Users.find().select({
      userName: 1,
      email: 1,
      imgUrl: 1,
      phone: 1,
    });
    res.status(200).json({ status: true, data: users });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
