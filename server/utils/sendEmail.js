// utils/sendEmail.js
const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async ({ name, email, orderId, total, products }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const items = products.map(p => `<li>${p.name} x ${p.quantity}</li>`).join("");

  const mailOptions = {
    from: `Jucly <${process.env.GMAIL_USER}>`,
    to: email,
    subject: `Your Jucly Order (ID: ${orderId})`,
    html: `
      <h2 style="color:#C49A6C;">Thanks for your order, ${name}!</h2>
      <p>Order ID: ${orderId}</p>
      <ul>${items}</ul>
      <p><strong>Total:</strong> ₹${total}</p>
      <p>Estimated Delivery: 2–3 days</p>
    `,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
