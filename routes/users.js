const { Router } = require("express");
const router = Router();
const { getUser, getUserBooks } = require("../controllers/user");
const { validateJWT } = require("../middlewares/validate-jwt.js");

router.get("/:id", getUser);
router.get("/:id/books", getUserBooks);

router.use(validateJWT);

module.exports = router;
