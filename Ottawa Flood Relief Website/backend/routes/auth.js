const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

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
      address: req.body.address, 
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

module.exports = router;