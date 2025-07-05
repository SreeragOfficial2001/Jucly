import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message sent:", formData);
    alert("Thanks for contacting Jucly!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#fdf6ed] to-[#fffaf5] px-6 py-24 font-sans overflow-hidden">
      <div className="absolute w-96 h-96 bg-[#e8dccc] rounded-full -top-24 -left-24 opacity-20 blur-3xl" />
      <div className="absolute w-80 h-80 bg-[#c4a77a] rounded-full bottom-0 right-0 opacity-20 blur-2xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-[#2a1d1d] text-white p-10 md:p-14 rounded-3xl shadow-2xl max-w-2xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#d4af7f] mb-8 text-center tracking-wide">
          Get in Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-[#3a2a2a] border border-[#5e4c4c] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af7f]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-[#3a2a2a] border border-[#5e4c4c] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af7f]"
          />
          <textarea
            name="message"
            placeholder="Write your message here..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-[#3a2a2a] border border-[#5e4c4c] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af7f]"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#d4af7f] text-[#2a1d1d] font-semibold py-3 rounded-full hover:bg-[#c49d6e] transition-all duration-300 shadow-md"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactPage;
