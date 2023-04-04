const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
require("dotenv").config();

const User = require("../../../models/Users");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  //   console.log(req.body);

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Please enter all fields" });
  }

  try {
    await User.findOne({ email })
      .then(async (user) => {
        if (!user) {
          return res
            .status(400)
            .json({ success: false, message: "User doesn't exist" });
        }

        let newUser = {
          id: user?.id,
          firstName: user?.firstName,
          lastName: user?.lastName,
          email: user?.email,
          userType: user?.userType,
        };

        await bcrypt.compare(password, user.password).then((isMatch) => {
          if (!isMatch) {
            return res
              .status(400)
              .json({ success: false, message: "Invalid Credentials" });
          } else {
            jwt.sign(
              newUser,
              process.env.SECRET,
              { expiresIn: 3600 },
              (err, token) => {
                console.log(isMatch, err, token);
                if (err) {
                  throw err;
                }
                return res.status(400).json({
                  success: true,
                  message: "User logged In",
                  data: { ...newUser, token },
                });
              }
            );
          }
        });
      })
      .catch((err) => {
        return res.status(500).json({
          success: false,
          message: "Server Error" + err,
        });
      });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Error:" + err,
    });
  }
});

module.exports = router;
