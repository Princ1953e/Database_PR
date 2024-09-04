const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/user")
  .then(() => console.log("Connected!"))
  .catch((err) => {
    console.log("Error", err);
  });

const userSchema = new mongoose.Schema({
  Budget: { type: String },
  Transactions: { type: String, require: true },
  category: { type: String, require: true },
  amount: { type: Number, require: true },
  description: { type: String },
  date: { type: String },
});

module.exports = mongoose.model("User", userSchema);
