const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  time: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "0",
  },
});

module.exports = mongoose.model("Booking", BookingSchema);
