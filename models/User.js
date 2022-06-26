const { Schema, model } = require("mongoose");

const MODEL_NAME = "User";
const UserSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const userSchema = model(MODEL_NAME, UserSchema);

module.exports = {
  userSchema,
  MODEL_NAME,
};
