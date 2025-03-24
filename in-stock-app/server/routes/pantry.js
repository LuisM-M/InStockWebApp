// server/routes/pantry.js
const express = require('express');
const { addPantryItem, getPantryItems } = require('../controllers/pantry');

const router = express.Router();

// Add a pantry item
router.post('/', addPantryItem);

// Fetch pantry items for a user
router.get('/:user_id', getPantryItems);

module.exports = router;