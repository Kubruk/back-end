const { Schema, model } = require("mongoose");

const MODEL_NAME = "User";
const UserSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const userSchema = model(MODEL_NAME, UserSchema);

module.exports = {
  userSchema,
  MODEL_NAME,
};
