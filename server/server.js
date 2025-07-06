const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Route imports
const emailRoutes = require("./routes/email");
const productRoutes = require("./routes/product");
const bookingRoutes = require("./routes/booking");
const trackRoutes = require("./routes/track");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route Mounting
app.use("/api/email", emailRoutes);       // ✅ Corrected path
app.use("/api/products", productRoutes);
app.use("/api/booking", bookingRoutes);
app.use("/api/track", trackRoutes);

// Optional: Root route for quick test
app.get("/", (req, res) => {
  res.send("✅ Backend is running");
});

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(process.env.PORT || 5000, () => {
      console.log(`🚀 Backend running at http://localhost:${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
  });
