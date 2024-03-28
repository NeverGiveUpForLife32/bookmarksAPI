require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../models/user");
// const Bookmark = require('../../models/bookmark')
const crypto = require("crypto");

// must remember to make e.target.value front end stuff. I feel like what I'm doing with res.locals.json is incorrect
const getBookmarksBySearchQuery = async (req, res, next) => {
  try {
    // is below all I really need?
    const user = await User.findOne({ email: res.locals.data.email })
      .populate("bookmarks")
      .sort(req.params.title)
      .exec();
    const bookmarks = user.bookmarks;
    const query = req.params.toLowerCase();
    const result = bookmarks.find({ query });
    res.json(result);
    next();
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// const getBookmarksByTag = async (req, res, next) => {
//     try {

//     } catch (error) {
//         res.status(400).json({ msg: error.message })

//     }
// }

module.exports = {
  getBookmarksBySearchQuery,
};
