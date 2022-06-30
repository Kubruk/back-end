const { request, response } = require("express");
const { userSchema: User } = require("../models/User");
const { bookSchema: Book } = require("../models/Book");

const getUser = async (req = request, res = response) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);
    const books = await Book.find({ author: userId });

    if (!user) {
      return res.status(404).json({
        ok: false,
        error: "This user doesn't exist",
      });
    }

    res.status(200).json({
      ok: true,
      user,
      books,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      error: "Something happens",
    });
  }
};

module.exports = {
  getUser,
};
