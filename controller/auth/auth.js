const me = (req, res, next) => {
  try {
    if (!req.user) throw err;
    return res
      .status(200)
      .json({ success: true, message: "User Verifired", data: req.user });
  } catch (err) {
    return res.status(400).json({ success: false, message: "Error :" + err });
  }
};

module.exports = me;
