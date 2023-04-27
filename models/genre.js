const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Genre = new Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 100 },
});

// Virtual for this genre instance URL.
Genre.virtual("url").get(function () {
  return "/catalog/genre/" + this._id;
});

// Export model.
module.exports = mongoose.model("Genre", Genre);
