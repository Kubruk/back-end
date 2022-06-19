const { Router } = require("express")
const router = Router()
const { getUser, createUser, renewToken } = require("../controllers/auth")
const { baseValidation, newUserValidation } = require("../middleware/auth")

router.post("/", baseValidation, getUser)

router.post("/new", newUserValidation, createUser)

router.get("/renew", renewToken)

module.exports = router