const { check } = require("express-validator");
const { handleErrors } = require("./utils");

const baseValidation = [
  check("user", "User is required").not().isEmpty(),
  check("title", "Title is required").not().isEmpty(),
  check("description", "Description is required").not().isEmpty(),
  handleErrors,
];

module.exports = {
  baseValidation,
};
