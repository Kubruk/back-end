const { Router } = require("express");
const router = Router();
const {
  getAllBooks,
  getOneBook,
  createBook,
  editBook,
  deleteBook,
} = require("../controllers/books");
const { validateJWT } = require("../middlewares/validate-jwt.js");

router.get("/", getAllBooks);
router.get("/:id", getOneBook);

router.use(validateJWT);
router.post("/new", createBook);
router.put("/:id", editBook);
router.delete("/:id", deleteBook);

module.exports = router;
