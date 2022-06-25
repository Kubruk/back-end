const { check, validationResult } = require("express-validator");
const { response } = require("express");

const handleErrors = (req, res = response, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  next();
};

const baseValidation = [
  check("email", "Email is required").isEmail(),
  check("password", "Password invalid").isLength({ min: 6 }),
  handleErrors,
];

const newUserValidation = [
  check("name", "Name is required").not().isEmpty(),
  ...baseValidation,
];

module.exports = {
  baseValidation,
  newUserValidation,
};
