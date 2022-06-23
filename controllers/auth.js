const { request, response } = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const loginUser = async (req = request, res = response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        ok: false,
        error: "User don't exists",
      });
    }

    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        error: "Invalid password",
      });
    }

    res.json({
      ok: true,
      msg: "new",
      user: {
        uid: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error: "Something happens",
    });
  }
};

const createUser = async (req = request, res = response) => {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        ok: false,
        error: "The credentials aren't valid",
      });
    }

    user = new User(req.body);
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);
    await user.save();

    res.status(201).json({
      ok: true,
      msg: "new",
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error: "Something happens",
    });
  }
};

const renewToken = (req = request, res = response) => {
  const { email, password } = req.body;

  res.json({
    ok: true,
    msg: "renew",
    user: {
      email,
      password,
    },
  });
};

module.exports = {
  loginUser,
  createUser,
  renewToken,
};
