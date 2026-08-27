const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    cityArea: String,

    numberOfAdults: Number,

    numberOfChildren: Number,

    numberOfPets: Number,

    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("User", UserSchema);