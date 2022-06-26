const { request, response } = require("express");

const getAllPosts = async (req = request, res = response) => {
  res.json({
    ok: true,
    posts: [],
  });
};

const getOnePost = async (req = request, res = response) => {
  res.json({
    ok: true,
    post: {
      title: "test",
    },
  });
};

const createPost = async (req = request, res = response) => {
  res.json({
    ok: true,
    post: {
      title: "test",
    },
  });
};

const editPost = async (req = request, res = response) => {
  res.json({
    ok: true,
    post: {
      title: "test",
    },
  });
};

const deletePost = async (req = request, res = response) => {
  res.json({
    ok: true,
    post: {
      title: "test",
    },
  });
};

module.exports = {
  getAllPosts,
  getOnePost,
  createPost,
  editPost,
  deletePost,
};
