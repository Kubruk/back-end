const { request, response } = require("express")

const getUser = (req = request, res = response) => {
    res.json({
        ok: true,
        msg: "login"
    })
}

const createUser = (req = request, res = response) => {
    const user = req.body

    res.json({
        ok: true,
        msg: "new",
        user
    })
}

const renewToken = (req = request, res = response) => {
    res.json({
        ok: true,
        msg: "renew"
    })
}

module.exports = {
    getUser,
    createUser,
    renewToken
}