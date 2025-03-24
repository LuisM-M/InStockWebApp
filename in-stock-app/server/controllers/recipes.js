// server/controllers/recipes.js
const db = require('../db');

// Add a recipe
const addRecipe = async (req, res) => {
  const { user_id, recipe_name } = req.body;
  try {
    const [results] = await db.query(
      'INSERT INTO Recipes (user_id, recipe_name) VALUES (?, ?)',
      [user_id, recipe_name]
    );
    res.json({ recipe_id: results.insertId, user_id, recipe_name });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Fetch recipes for a user
const getRecipes = async (req, res) => {
  const { user_id } = req.params;
  try {
    const [results] = await db.query('SELECT * FROM Recipes WHERE user_id = ?', [user_id]);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addRecipe, getRecipes };