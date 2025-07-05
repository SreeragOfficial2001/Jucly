
const express = require("express");
const Booking = require("../models/Booking");
const sendEmail = require("../utils/sendEmail");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const booking = new Booking(data);
    await booking.save();
    await sendEmail(data);
    res.status(201).json({ message: "Booking received", orderId: booking.orderId });
  } catch (err) {
    res.status(500).json({ message: "Booking failed" });
  }
});

module.exports = router;
