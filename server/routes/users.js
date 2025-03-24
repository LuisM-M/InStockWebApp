// server/routes/users.js
const express = require('express');
const { addUser, getUsers } = require('../controllers/users');

const router = express.Router();

// Add a user
router.post('/', addUser);

// Fetch all users
router.get('/', getUsers);

module.exports = router;