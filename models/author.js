const mongoose = require("mongoose");
const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

AuthorSchema.virtual("name").get(function () {
  let fullname = "";
  if (this.first_name && this.family_name) {
    fullname = `${this.family_name}, ${this.first_name}`;
  }
  if (!this.first_name || !this.family_name) {
    fullname = "";
  }
  return fullname;
});

AuthorSchema.virtual("url").get(function () {
  return `/catalog/author/${this._id}`;
});

AuthorSchema.virtual("birth_date_formatted").get(function () {
  return this.date_of_birth
    ? DateTime.fromJSDate(this.date_of_birth)
        .setZone("Europe/London")
        .toLocaleString(DateTime.DATE_MED)
    : "";
});

AuthorSchema.virtual("death_date_formatted").get(function () {
  return this.date_of_death
    ? DateTime.fromJSDate(this.date_of_death)
        .setZone("Europe/London")
        .toLocaleString(DateTime.DATE_MED)
    : "";
});

module.exports = mongoose.model("Author", AuthorSchema);
