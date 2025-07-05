
const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  products: Array,
  total: Number,
  orderId: String,
  status: {
    type: String,
    default: "Processing",
  },
});

module.exports = mongoose.model("Booking", BookingSchema);
