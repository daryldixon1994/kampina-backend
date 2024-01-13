const User = require("../../models/User");
const bcrypt = require("bcrypt");
module.exports = async (req, res) => {
  try {
    let { id } = req.params;
    let { password } = req.body;
    let testPassword = await password.match(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+|~-]).{8,}$/
    );
    if (!testPassword) {
      return res.status(401).json({
        status: false,
        error: `Your password must contain 8 characters with at least one uppercase character, one lowercase character and one special character (!@#$%^&*()_+|~-)`,
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.findByIdAndUpdate(
      id,
      {
        $set: { password: hashedPassword },
      },
      { new: true }
    );
    res
      .status(200)
      .json({ status: true, message: "Infos has been updated", data: newUser });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
