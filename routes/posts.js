const { Router } = require("express");
const router = Router();
const {
  getAllPosts,
  getOnePost,
  createPost,
  editPost,
  deletePost,
} = require("../controllers/posts");
const { validateJWT } = require("../middlewares/validate-jwt.js");

router.get("/", validateJWT, getAllPosts);
router.get("/:id", validateJWT, getOnePost);
router.put("/:id", validateJWT, editPost);
router.delete("/:id", validateJWT, deletePost);
router.post("/new", validateJWT, createPost);

module.exports = router;
