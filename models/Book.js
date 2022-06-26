const { Schema, model } = require("mongoose");
const { MODEL_NAME: userModelName } = require("./User");

const MODEL_NAME = "Book";

const BookSchema = Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: userModelName,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    portrait: {
      type: String,
      required: true,
      default: "",
    },
    genres: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

BookSchema.method("toJSON", function () {
  const { _id, __v, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const bookSchema = model(MODEL_NAME, BookSchema);

module.exports = {
  bookSchema,
  MODEL_NAME,
};
