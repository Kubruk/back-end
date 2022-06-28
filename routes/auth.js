const { Router } = require("express");
const router = Router();
const {
  loginUser,
  createUser,
  renewToken,
  logout,
} = require("../controllers/auth");
const {
  baseValidation,
  newUserValidation,
} = require("../middlewares/auth-validation");
const { validateJWT } = require("../middlewares/validate-jwt.js");

router.post("/", baseValidation, loginUser);

router.post("/new", newUserValidation, createUser);

router.get("/renew", validateJWT, renewToken);

router.post("/logout", validateJWT, logout);

module.exports = router;
