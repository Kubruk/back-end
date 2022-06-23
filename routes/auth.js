const { Router } = require("express");
const router = Router();
const { loginUser, createUser, renewToken } = require("../controllers/auth");
const { baseValidation, newUserValidation } = require("../middlewares/auth");

router.post("/", baseValidation, loginUser);

router.post("/new", newUserValidation, createUser);

router.get("/renew", renewToken);

module.exports = router;
