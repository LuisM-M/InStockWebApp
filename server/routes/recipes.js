// server/routes/recipes.js
const express = require('express');
const { addRecipe, getRecipes } = require('../controllers/recipes');

const router = express.Router();

// Add a recipe
router.post('/', addRecipe);

// Fetch recipes for a user
router.get('/:user_id', getRecipes);

module.exports = router;