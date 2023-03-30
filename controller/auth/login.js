const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
require("dotenv").config();

const User = require("../../models/Users");
const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
  const { email, password } = req.body;
  //   console.log(req.body);

  if (!email || !password) {
    return res
      .status(400)
      .json({ succress: false, message: "Please enter all fields" });
  }

  try {
    User.findOne({ email }).then(async (user) => {
      if (!user)
        return res
          .status(400)
          .json({ succress: false, message: "User doesn't exist" });

      console.log(user);
      //   let newPassword = "";

      bcrypt.hash(password, Number(process.env.SALT)).then((hash) => {
        bcrypt.compare(password, hash).then((isMatch) => {
          if (!isMatch) {
            res
              .status(400)
              .json({ success: false, message: "Invalid Credentials" });
          } else {
            let newUser = {
              id: user?.id,
              firstName: user?.firstName,
              lastName: user?.lastName,
              email: user?.email,
            };

            jwt.sign(
              newUser,
              process.env.SECRET,
              { expiresIn: 3600 },
              (err, token) => {
                if (err) throw err;
                return res.status(200).json({
                  success: true,
                  message: "User logged In",
                  data: { ...newUser, token },
                });
              }
            );
          }
        });
      });
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Error:" + err,
    });
  }
};

module.exports = login;
