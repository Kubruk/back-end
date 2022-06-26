const { request, response } = require("express");

const getAllBooks = async (req = request, res = response) => {
  res.json({
    ok: true,
    Books: [],
  });
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
  res.json({
    ok: true,
    Book: {
      title: "test",
    },
  });
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
