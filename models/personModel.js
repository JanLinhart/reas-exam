const mongoose = require("mongoose");

const peopleSchema = {
  EstateType: String,
  Fullname: String,
  Phone: String,
  Email: String,
  Region: String,
  District: String,
};

const Person = mongoose.model("Person", peopleSchema);

module.exports = Person;
