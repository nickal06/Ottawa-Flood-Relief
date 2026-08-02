console.log("Starting server process...");

const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

console.log("Loaded dotenv. MONGO_URI is:", process.env.MONGO_URI ? "Defined" : "UNDEFINED");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);


app.listen(5000, () => {
  console.log("🚀 Server is running at http://localhost:5000");
});


console.log("Attempting MongoDB connection...");
mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000, 
  })
  .then(() => console.log("✅ MongoDB connected successfully!"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

mongoose.set("bufferCommands", false);