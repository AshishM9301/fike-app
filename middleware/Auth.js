const User = require("../models/Users");

let auth = async (req, res, next) => {
  const { authorization } = req.headers;

  try {
    if (!authorization) {
      throw err;
    }

    let token = authorization.replace("Bearer ", "");

    await jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) throw err;
      await User.findOne({ _id: ObjectId(decoded?.id) }).then((user) => {
        if (!user)
          return res
            .status(400)
            .json({ succress: false, message: "User doesn't exist" });

        let response = {
          id: user?.id,
          firstName: user?.firstName,
          lastName: user?.lastName,
          email: user?.email,
          userType: user?.userType,
        };

        req.user = response;

        next();
      });
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: "Error :" + err });
  }
};

let adminAuth = async (req, res, next) => {
  try {
    if (req.user.userType !== "Admin") throw err;

    next();
  } catch (err) {
    return res.status(400).json({ success: false, message: "Error :" + err });
  }
};

module.exports = { auth, adminAuth };
