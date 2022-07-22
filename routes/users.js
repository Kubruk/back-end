const { Router } = require("express");
const router = Router();
const { getUserProfile } = require("../controllers/user");
const { validateJWT } = require("../middlewares/validate-jwt.js");

router.get("/:id", getUserProfile);

router.use(validateJWT);

module.exports = router;
