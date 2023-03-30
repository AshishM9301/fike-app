const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
require("dotenv").config();

const User = require("../../models/Users");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  const { firstName, lastName, email, password, seller } = req.body;
  //   console.log(req.body);

  if (!firstName || !lastName || !email || !password) {
    return res
      .status(400)
      .json({ succress: false, message: "Please enter all fields" });
  }

  try {
    User.findOne({ email }).then(async (user) => {
      if (user)
        return res
          .status(400)
          .json({ succress: false, message: "User already Existed" });

      let newPassword = "";

      bcrypt
        .genSalt(Number(process.env.SALT))
        .then((salt) => {
          return bcrypt.hash(password, salt);
        })
        .then((hash) => {
          newPassword = hash;
        })
        .catch((err) => {
          return res.status(500).json({
            success: false,
            message: "Server Error" + err,
          });
        });

      const newUser = new User({
        firstName,
        lastName,
        password: newPassword,
        email,
      });

      await newUser.save().then((user) => {
        let savedUser = {
          id: user?.id,
          firstName: user?.firstName,
          lastName: user?.lastName,
          email: user?.email,
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
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Error:" + err,
    });
  }
};

module.exports = register;
