const { Router } = require("express");
const router = Router();
const { loginUser, createUser, renewToken } = require("../controllers/auth");
const {
  baseValidation,
  newUserValidation,
} = require("../middlewares/auth-validation");
const { validateJWT } = require("../middlewares/validate-jwt.js");

router.post("/", baseValidation, loginUser);

router.post("/new", newUserValidation, createUser);

router.get("/renew", validateJWT, renewToken);

module.exports = router;
