// 1. Load env variables
require("dotenv").config();

// 2. Import packages
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const noteRoutes = require("./routes/noteRoutes");

// 3. Create app
const app = express();
app.use(cors());

// 4. Middleware
app.use(express.json());

// 5. Connect Database
connectDB();

// 6. Routes
app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// 7. Port
const PORT = 5000;

// 8. Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});