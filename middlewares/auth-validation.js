const { check } = require("express-validator");
const { handleErrors } = require("./utils");

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
