const express = require("express");
const Booking = require("../models/Booking");
const router = express.Router();

router.get("/:orderId", async (req, res) => {
  try {
    const order = await Booking.findOne({ orderId: req.params.orderId });
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json({ status: order.status });
  } catch (err) {
    res.status(500).json({ message: "Error tracking order" });
  }
});

module.exports = router;
