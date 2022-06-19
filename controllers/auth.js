const { request, response } = require("express")
const { validationResult } = require("express-validator")

const getUser = (req = request, res = response) => {
    res.json({
        ok: true,
        msg: "login"
    })
}

const createUser = (req = request, res = response) => {
    const { name, email, password } = req.body

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

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

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

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