// const multer = require("multer");
// require("dotenv").config();
// const GridFsStorage = require("multer-gridfs-storage");
// let DB = process.env.DB;

// const storage = new GridFsStorage({
//   url: `mongodb+srv://gmcws2024:${DB}@cluster0.4dmpkdc.mongodb.net/camping-app?retryWrites=true&w=majority`,
//   file: (req, file) => {
//     const match = [
//       "image/png",
//       "image/jpeg",
//       "image/jpg",
//       "image/webp",
//       "image/jfif",
//       "image/svg",
//     ];

//     if (match.indexOf(file.mimetype) === -1) {
//       const filename = `${Date.now()}-any-name-${file.originalname}`;
//       return filename;
//     }

//     return {
//       bucketName: "photos",
//       filename: `${Date.now()}-any-name-${file.originalname}`,
//     };
//   },
// });

// module.exports = multer({ storage });

//
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "uploads");
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    callback(null, Date.now() + name);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/jfif"
    ) {
      callback(null, true);
    } else {
      callback(null, true);
    }
  },
});

module.exports = upload;
