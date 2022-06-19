const { Router } = require("express")
const router = Router()
const { getUser, createUser, renewToken } = require("../controllers/auth")

router.post("/", getUser)

router.post("/new", createUser)

router.get("/renew", renewToken)

module.exports = router