// Import required modules
const express = require('express');
const mongoose = require('mongoose');
// Configure environment variables
require('dotenv').config({ path: './config/.env' });

// Initialize the express application
const app = express();

// Middleware to parse JSON bodies from requests
app.use(express.json());

// Import the User model
const User = require('./models/User');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to the database...'))
    .catch(err => console.error('Database connection error:', err));

// Routes

// GET: RETURN ALL USERS
app.get('/users', async (req, res) => {
    try {
        // Find all users in the database
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        // Handle errors and send appropriate status code
        res.status(500).json({ message: 'Error retrieving users', error: error.message });
    }
});

// POST: ADD A NEW USER TO THE DATABASE
app.post('/users', async (req, res) => {
    try {
        // Create a new user with the request body data
        const newUser = new User(req.body);
        // Save the user to the database
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        // Handle errors (e.g., validation errors)
        res.status(400).json({ message: 'Error creating user', error: error.message });
    }
});

// PUT: EDIT A USER BY ID
app.put('/users/:id', async (req, res) => {
    try {
        // Find user by ID and update with new data
        // { new: true } option returns the modified document rather than the original
        // { runValidators: true } ensures model validations run on the update
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: 'Error updating user', error: error.message });
    }
});

// DELETE: REMOVE A USER BY ID
app.delete('/users/:id', async (req, res) => {
    try {
        // Find user by ID and delete
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
