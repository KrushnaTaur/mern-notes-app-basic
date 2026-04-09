const mongoose = require("mongoose");

// Create schema
const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User" // link with User model
  }
}, { timestamps: true });

// Export model
module.exports = mongoose.model("Note", noteSchema);