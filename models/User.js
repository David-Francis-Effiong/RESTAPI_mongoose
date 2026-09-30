// Import mongoose
const mongoose = require('mongoose');

// Define the User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true, // ensure email is unique
        lowercase: true,
        trim: true
    },
    age: {
        type: Number,
        default: 18
    }
}, { timestamps: true }); // automatically add createdAt and updatedAt timestamps

// Export the User model
module.exports = mongoose.model('User', userSchema);
