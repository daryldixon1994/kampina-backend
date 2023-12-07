const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const campSchema = new Schema(
  {
    imgUrl: {
      type: String,
      requied: [true, , "This is a required field"],
    },
    title: {
      type: String,
      requied: [true, , "This is a required field"],
    },
    limiteParticipant: {
      type: Number,
      requied: [true, , "This is a required field"],
    },
    users: {
      type: [Schema.Types.ObjectId],
      ref: "User",
    },
    region: {
      type: String,
      requied: [true, , "This is a required field"],
    },
    city: {
      type: String,
      requied: [true, , "This is a required field"],
    },
    place: {
      type: String,
      requied: [true, , "This is a required field"],
    },
    date: {
      type: String,
      requied: [true, , "This is a required field"],
    },
    period: {
      type: String,
      requied: [true, , "This is a required field"],
    },
    price: {
      type: Number,
      requied: [true, , "This is a required field"],
    },
    isClosed: {
      type: Boolean,
      default: false,
    },
    isCancelled: {
      type: Boolean,
      default: false,
    },
    isPostponed: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Camp = mongoose.model("Camp", campSchema);
