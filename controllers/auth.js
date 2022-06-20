const { request, response } = require("express")


const getUser = (req = request, res = response) => {
    res.json({
        ok: true,
        msg: "login"
    })
}

const createUser = (req = request, res = response) => {
    const { name, email, password } = req.body

    res.status(201).json({
        ok: true,
        msg: "new",
        user: {
            name,
            email,
            password
        }
    })
}

const renewToken = (req = request, res = response) => {
    const { email, password } = req.body

    res.json({
        ok: true,
        msg: "renew",
        user: {
            email,
            password
        }
    })
}

module.exports = {
    getUser,
    createUser,
    renewToken
}