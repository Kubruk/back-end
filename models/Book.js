const { Schema, model } = require("mongoose");
const { MODEL_NAME: userModelName } = require("./User");

const MODEL_NAME = "Book";

const BookSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: userModelName,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  portrait: {
    type: String,
    require: true,
    default: "",
  },
  genres: {
    type: Array,
  },
});

const bookSchema = model(MODEL_NAME, BookSchema);

module.exports = {
  bookSchema,
  MODEL_NAME,
};
