const { request, response } = require("express");
const User = require("../models/User");

const getUser = (req = request, res = response) => {
  res.json({
    ok: true,
    msg: "login",
  });
};

const createUser = async (req = request, res = response) => {
  try {
    const { name, email, password } = req.body;

    const user = new User(req.body);
    await user.save();

    res.status(201).json({
      ok: true,
      msg: "new",
      user: {
        name,
        email,
        password,
      },
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
  getUser,
  createUser,
  renewToken,
};
