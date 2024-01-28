const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: [true, "This is a required field, please insert a username"],
    },
    email: {
      type: String,
      required: [true, "This is a required field, please insert an email"],
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "This is invalid email, please check it again",
      ],
    },
    password: {
      type: String,
      required: [true, "This is a required field, please insert a password"],
      match: [
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+|~-]).{8,}$/,
        `Your password must contain 8 characters with at least one uppercase character, one lowercase character and one special character (!@#$%^&*()_+|~-)`,
      ],
    },
    phone: {
      type: String,
      required: [
        true,
        "This is a required field, please insert a phone number",
      ],
      minLength: [8, "Minimum 8 numbers are required"],
      maxLength: [8, "Minimum 8 numbers are required"],
    },
    imgUrl: {
      type: "string",
      default:
        "https://res.cloudinary.com/dc8u6ydtu/image/upload/v1676288068/uploads/loz4wm4yjy00ozlosit9.png",
    },
    isUser: {
      type: Boolean,
      default: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User = mongoose.model("User", userSchema);
