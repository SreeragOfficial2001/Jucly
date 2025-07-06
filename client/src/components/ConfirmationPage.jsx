import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const ConfirmationPage = () => {
  useEffect(() => {
    axios.post("https://jucly-backend.onrender.com/api/email/send-email", {
      name: "Sreerag",
      email: "sreeragofficial2001@gmail.com",
      orderId: "JUC1245",
      total: 499,
      items: [
        { name: "Royal Mango Elixir", quantity: 2 },
        { name: "Berry Luxe Blast", quantity: 1 },
      ],
    })
    .then((res) => console.log("✅ Email sent:", res.data))
    .catch((err) => console.error("❌ Email failed:", err.response?.data || err.message));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-br from-[#2a1d1d] to-[#1a1212] font-sans">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#ffffff0a] backdrop-blur-md border border-[#ffffff15] p-10 rounded-2xl shadow-2xl text-center max-w-xl w-full"
      >
        <h2 className="text-4xl font-extrabold mb-4 text-[#FFD700] drop-shadow-lg">
          ✅ Payment Successful!
        </h2>
        <p className="text-white text-lg leading-relaxed mb-6">
          Thank you for your order,{" "}
          <span className="font-semibold text-gold">Sreerag</span>. <br />
          We’ve received your payment and are preparing your premium juice
          package!
        </p>
        <div className="bg-[#ffffff0a] p-4 rounded-lg mb-6 border border-[#ffffff20] text-white text-sm space-y-2">
          <p>
            📦 <strong className="text-gold">Order Status:</strong> Processing
          </p>
          <p>
            🧾 <strong className="text-gold">Order ID:</strong> JUC1245
          </p>
          <p>
            📅 <strong className="text-gold">Delivery:</strong> Estimated in 2–3
            days
          </p>
        </div>
        <Link
          to="/track"
          className="inline-block mt-6 px-6 py-3 bg-[#FFD700] text-[#2a1d1d] font-semibold rounded-full shadow-md hover:bg-[#e6c200] transition"
        >
          Track My Order
        </Link>
      </motion.div>
    </div>
  );
};

export default ConfirmationPage;
