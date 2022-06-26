const { request, response } = require("express");
const { bookSchema: Book } = require("../models/Book");

const getAllBooks = async (req = request, res = response) => {
  try {
    const books = await Book.find().populate("user", "name");

    res.json({
      ok: true,
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

const getOneBook = async (req = request, res = response) => {
  res.json({
    ok: true,
    Book: {
      title: "test",
    },
  });
};

const createBook = async (req = request, res = response) => {
  const book = new Book(req.body);

  try {
    book.user = req.uid;
    const newBook = await book.save();

    res.json({
      ok: true,
      book: newBook,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      error: "Something happens",
    });
  }
};

const editBook = async (req = request, res = response) => {
  res.json({
    ok: true,
    Book: {
      title: "test",
    },
  });
};

const deleteBook = async (req = request, res = response) => {
  res.json({
    ok: true,
    Book: {
      title: "test",
    },
  });
};

module.exports = {
  getAllBooks,
  getOneBook,
  createBook,
  editBook,
  deleteBook,
};
