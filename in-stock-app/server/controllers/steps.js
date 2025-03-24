// server/controllers/steps.js
const db = require('../db');

// Add a recipe step
const addStep = async (req, res) => {
  const { recipe_id, step_number, instructions } = req.body;
  try {
    const [results] = await db.query(
      'INSERT INTO RecipeSteps (recipe_id, step_number, instructions) VALUES (?, ?, ?)',
      [recipe_id, step_number, instructions]
    );
    res.json({ step_id: results.insertId, recipe_id, step_number, instructions });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Fetch steps for a recipe
const getSteps = async (req, res) => {
  const { recipe_id } = req.params;
  try {
    const [results] = await db.query('SELECT * FROM RecipeSteps WHERE recipe_id = ?', [recipe_id]);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addStep, getSteps };