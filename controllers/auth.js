const { request, response } = require("express");
const bcrypt = require("bcryptjs");
const { userSchema: User } = require("../models/User");
const { generateJWT } = require("../helpers/jwt");

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

    const token = await generateJWT({ uid: user.id, name: user.name });

    res.json({
      ok: true,
      msg: "new",
      user: {
        uid: user.id,
        name: user.name,
        email: user.email,
        token,
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
        error: "These user already exists",
      });
    }

    user = new User(req.body);
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);
    await user.save();

    const token = await generateJWT({ uid: user.id, name: user.name });

    res.status(201).json({
      ok: true,
      msg: "new",
      user: {
        uid: user.id,
        name: user.name,
        token,
      },
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error: "Something happens",
    });
  }
};

const renewToken = async (req = request, res = response) => {
  const { uid, name } = req;

  const token = await generateJWT({ uid, name });

  res.json({
    ok: true,
    token,
  });
};

module.exports = {
  loginUser,
  createUser,
  renewToken,
};
