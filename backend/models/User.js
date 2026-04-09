const mongoose = require("mongoose");

// Create schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // no duplicate emails
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true });

// Export model
module.exports = mongoose.model("User", userSchema);