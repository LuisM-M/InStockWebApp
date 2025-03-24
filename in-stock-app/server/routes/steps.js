// server/routes/steps.js
const express = require('express');
const { addStep, getSteps } = require('../controllers/steps');

const router = express.Router();

// Add a recipe step
router.post('/', addStep);

// Fetch steps for a recipe
router.get('/:recipe_id', getSteps);

module.exports = router;