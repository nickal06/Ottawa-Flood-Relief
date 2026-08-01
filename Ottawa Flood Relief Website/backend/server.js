const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(5000, () => {
  console.log("Server is running at port 5000");
});

const mongoose = require("mongoose");
require("dotenv").config();


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB connected");
})
.catch(err=>{
    console.log(err);
});

const authRoutes = require("./routes/auth");

app.use("/api/auth", authRoutes);