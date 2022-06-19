const { Router } = require("express")
const router = Router()

router.post("/", (req, res) => {
    res.json({
        ok: true,
        msg: "login"
    })
})

router.post("/new", (req, res) => {
    res.json({
        ok: true,
        msg: "new"
    })
})

router.get("/renew", (req, res) => {
    res.json({
        ok: true,
        msg: "renew"
    })
})

module.exports = router