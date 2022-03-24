const express = require("express");
const router = express.Router();
const Person = require("../models/personModel");

router.route("/lead").post((req, res) => {
  const EstateType = req.body.EstateType;
  const Fullname = req.body.Fullname;
  const Phone = req.body.Phone;
  const Email = req.body.Email;
  const Region = req.body.Region;
  const District = req.body.District;
  const newPerson = new Person({
    EstateType,
    Fullname,
    Phone,
    Email,
    Region,
    District,
  });
  console.log(newPerson);
  console.log(req.body.EstateType);

  newPerson.save();
});

module.exports = router;
