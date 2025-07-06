const express = require("express");
const router = express.Router();
const sendEmail = require("../utils/sendEmail"); // optional, or write logic directly here

router.post("/send-email", async (req, res) => {
  const { name, email, orderId, total, items } = req.body;

  if (!name || !email || !orderId || !total || !items) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    await sendEmail({ name, email, orderId, total, items });
    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ message: "Failed to send email", error: err.message });
  }
});

module.exports = router;
