const mongoose = require("mongoose");

const mouseSchema = new mongoose.Schema({
  type: {
    required: true,
    type: String,
  },
  direction: {
    type: String,
  },
  action: {
    type: String,
  },
  buttonClicked: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userId: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Mouse", mouseSchema);
