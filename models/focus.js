const mongoose = require("mongoose");

const focusSchema = new mongoose.Schema({
  type: {
    required: true,
    type: String,
  },
  userId: {
    required: true,
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Focus", focusSchema);
