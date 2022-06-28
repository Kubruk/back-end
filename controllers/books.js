const { request, response } = require("express");
const { bookSchema: Book } = require("../models/Book");

const getAllBooks = async (req = request, res = response) => {
  try {
    const books = await Book.find().populate("author", "name");

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
  // TODO: Get One Single Book
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
  try {
    const bookId = req.params.id;
    const uid = req.uid;

    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({
        ok: false,
        error: "This book doesn't exist",
      });
    }

    if (book.author.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        error: "Unauthorized",
      });
    }

    const newBook = {
      ...req.body,
      author: uid,
    };

    const bookUpdated = await Book.findByIdAndUpdate(book.id, newBook, {
      new: true,
    });

    res.json({
      ok: true,
      book: bookUpdated,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      error: "Something happens",
    });
  }
};

const deleteBook = async (req = request, res = response) => {
  try {
    const bookId = req.params.id;
    const uid = req.uid;

    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({
        ok: false,
        error: "This book doesn't exist",
      });
    }

    if (book.author.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        error: "Unauthorized",
      });
    }

    await Book.findByIdAndDelete(bookId);

    res.json({
      ok: true,
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
  getAllBooks,
  getOneBook,
  createBook,
  editBook,
  deleteBook,
};
