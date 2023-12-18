const mongoose = require("mongoose");
require("dotenv").config();
const DB = process.env.DB;
module.exports = async function connection() {
  try {
    await mongoose.connect(
      `mongodb+srv://gmcws2024:${DB}@cluster0.4dmpkdc.mongodb.net/camping-app?retryWrites=true&w=majority`,
      { useNewUrlParser: true }
    );
    console.log("connected to database");
  } catch (error) {
    console.log(error);
    console.log("could not connect to database");
  }
};
