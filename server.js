const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://jan123:rU8TBXi5LdeVwfSG@cluster0.o7qr7.mongodb.net/reasDB"
);

app.use("/", require("./routes/personRoute"));

app.listen(3001, function () {
  console.log("express server running");
});
