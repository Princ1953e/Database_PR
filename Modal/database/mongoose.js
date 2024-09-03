const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/user")
  .then(() => console.log("Connected!"))
  .catch((err) => {
    console.log("Error", err);
  });

const userSchema = new mongoose.Schema({
  Budget: { type: String, required: true },
  Transactions: { type: String, require: true },
  category: { type: String, require: true },
  amount: { type: Number, require: true },
  description: { type: String, require: true },
  date: { type: Date },
});

module.exports = mongoose.model("User", userSchema);
