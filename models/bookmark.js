require("dotenv").config();

const { model, Schema } = require("mongoose");

const bookmarkSchema = new Schema(
  {
    title: { required: true, type: String },
    url: { required: true, type: String },
    tags: { enum: ["Favorite", "Work", "Cooking", "Movies"] },
    // must conceive a way to connect model tags to input selector drop down.
  },
  {
    timestamps: true,
  }
);

module.exports = model("Bookmark", bookmarkSchema);
