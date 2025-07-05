
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const emailRoutes = require("../server/routes/email");
const productRoutes = require("../server/routes/product");
const bookingRoutes = require("../server/routes/booking");
const trackRoutes = require("../server/routes/track");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", emailRoutes);
app.use("/api/products", productRoutes);
app.use("/api/booking", bookingRoutes);
app.use("/api/track", trackRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(process.env.PORT || 5000, () =>
      console.log(` Backend running on http://localhost:${process.env.PORT || 5000}`)
    );
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
  });

