require("dotenv").config();
const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const crypto = require("crypto"); // this potential issue?
const SALT_ROUNDS = 6; // this potential issue?
const jwt = require("jsonwebtoken");

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: { type: String, trim: true, minLength: 5, required: true },
    bookmarks: [{ type: Schema.Types.ObjectId, ref: "Bookmark" }],
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const password = crypto
      .createHmac("sha256", process.env.SECRET)
      .update(this.password)
      .digest("hex")
      .split("")
      .reverse()
      .join(""); // this potential issue?
    this.password = await bcrypt.hash(password, SALT_ROUNDS);
  }
  next();
});

userSchema.methods.generateAuthToken = async function () {
  const token = jwt.sign({ _id: this._id }, process.env.SECRET);
  return token;
};

const User = model("User", userSchema);

module.exports = User;
