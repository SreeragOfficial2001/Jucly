const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/send-email", async (req, res) => {
  const { name, email, orderId, total, items } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const itemList = items
    .map((item) => `<li>${item.name} x ${item.quantity}</li>`)
    .join("");

  const mailOptions = {
    from: `Jucly <${process.env.GMAIL_USER}>`,
    to: email,
    subject: `Your Jucly Order Confirmation (ID: ${orderId})`,
    html: `
      <h2 style="color:#C49A6C;">Thank you for your order, ${name}!</h2>
      <p>Your order details:</p>
      <ul>${itemList}</ul>
      <p><strong>Total:</strong> ₹${total}</p>
      <p>Estimated Delivery: 2–3 days</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to send email" });
  }
});

module.exports = router;
