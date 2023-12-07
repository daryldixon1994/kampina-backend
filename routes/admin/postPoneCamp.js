const Camp = require("../../models/Camp");

module.exports = async (req, res) => {
  try {
    let { campId } = req.query;
    let { newDate } = req.body;
    const newCamp = await Camp.findByIdAndUpdate(
      campId,
      {
        $set: { isPostponed: true, date: newDate },
      },
      { new: true }
    );
    res.status(200).json({ status: true, data: newCamp });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
