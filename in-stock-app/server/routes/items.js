// server/routes/items.js
const express = require('express');
const { addItem, getItems } = require('../controllers/items');

const router = express.Router();

// Add a recipe item
router.post('/', addItem);

// Fetch items for a recipe step
router.get('/:step_id', getItems);

module.exports = router;