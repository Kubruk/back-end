const { check } = require("express-validator")

const baseValidation = [
    check("email", "Email is required").isEmail(),
    check("password", "Password invalid").isLength({ min: 6 }),
]

const newUserValidation = () => {
    return [
        check("name", "Name is required").not().isEmpty(),
        ...baseValidation
    ]
}

module.exports = {
    baseValidation,
    newUserValidation
}