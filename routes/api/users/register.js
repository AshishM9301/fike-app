const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
require("dotenv").config();

const User = require("../../../models/Users");
const jwt = require("jsonwebtoken");

router.post("/", (req, res) => {
  const { firstName, lastName, email, password, seller } = req.body;
  //   console.log(req.body);

  if (!firstName || !lastName || !email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Please enter all fields" });
  }

  try {
    User.findOne({ email })
      .then(async (user) => {
        if (user)
          return res
            .status(400)
            .json({ success: false, message: "User already Existed" });

        await bcrypt.genSalt(Number(process.env.SALT)).then(async (salt) => {
          await bcrypt.hash(password, salt).then(async (password) => {
            const newUser = new User({
              firstName,
              lastName,
              password: password,
              email,
              userType: seller === true ? "Seller" : "User",
            });

            await newUser.save().then((user) => {
              let savedUser = {
                id: user?.id,
                firstName: user?.firstName,
                lastName: user?.lastName,
                email: user?.email,
                userType: user?.userType,
              };

              jwt.sign(
                savedUser,
                process.env.SECRET,
                { expiresIn: 3600 },
                (err, token) => {
                  if (err) throw err;
                  return res.status(200).json({
                    success: true,
                    message: "User Registered",
                    data: { ...savedUser, token },
                  });
                }
              );
            });
          });
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
