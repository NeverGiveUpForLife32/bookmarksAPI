module.exports = (req, res, next) => {
  if (!req.user)
    return res.status(401).json({ msg: "YOU ARE NOT WELCOME HERE." });
  next();
};
