const { Router } = require("express");
const router = Router();
const { getUser } = require("../controllers/user");
const { validateJWT } = require("../middlewares/validate-jwt.js");

router.get("/:id", getUser);

router.use(validateJWT);

module.exports = router;
