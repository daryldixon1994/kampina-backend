const Camp = require("../../models/Camp");
module.exports = async (req, res) => {
  try {
    const camps = await Camp.find().populate(
      "users",
      "userName email imgUrl phone"
    );
    res.status(200).json({ status: true, data: camps });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
