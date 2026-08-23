const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { GoogleGenAI } = require("@google/genai");

console.log("Starting server process...");
console.log("Loaded dotenv. MONGO_URI is:", process.env.MONGO_URI ? "Defined" : "UNDEFINED");

const app = express();
const locations = require("./routes/locations");
const authRoutes = require("./routes/auth");

app.use(cors());
app.use(express.json());
app.use("/api", locations);
app.use("/api/auth", authRoutes);

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

console.log("Attempting MongoDB connection...");
mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.error("MongoDB connection error:", err));

mongoose.set("bufferCommands", false);


app.get("/", (req, res) => {
  res.send("API is running");
});

app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: messages,
      config: {
        systemInstruction: "You are a helpful, concise assistant.",
        temperature: 0.7,
        tools: [{googleSearch: {} }]
      },
    });

    res.json({ reply: response.text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: "Failed to communicate with Gemini API" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});