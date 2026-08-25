const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jtoken = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  console.log("--> Registration request received for:", req.body.email);

  try {
    if (User.db.readyState !== 1) {
      console.error("Database connection is not active!");
      return res.status(500).send("Database connection lost. Please try again.");
    }

    const existingUser = await User.findOne({ email: req.body.email }).maxTimeMS(3000); 

    if (existingUser) {
      return res.status(400).send("User already exists with this email");
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10); 

    const user = new User({
      username: req.body.username, 
      email: req.body.email, 
      cityArea: req.body.cityArea, 
      numberOfAdults: req.body.numberOfAdults, 
      numberOfChildren: req.body.numberOfChildren, 
      numberOfPets: req.body.numberOfPets, 
      specialNeeds: req.body.specialNeeds, 
      password: hashedPassword, 
    });

    await user.save({ maxTimeMS: 3000 }); 
    console.log("--> User successfully saved to MongoDB!");

    return res.status(201).send("User created successfully");

  } catch (error) {
    console.error("--> Registration Catch Block Triggered:", error);
    const message = error.message || String(error) || "Registration failed";
    return res.status(500).send(message); 
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send("Invalid email or password");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).send("Invalid email or password");
    }

    const token = jtoken.sign(
    {
      id: user._id,
      email: user.email
    },
    process.env.JWT_SECRET,
    {
    expiresIn: "24h"
    }
  );

    return res.status(200).json({
      message: "Login successful",
      token: token,
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });

  } catch (error) {
    return res.status(500).send("Server error during login");
  }
});

module.exports = router;