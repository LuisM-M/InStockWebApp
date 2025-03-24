// server/controllers/items.js
const db = require('../db');

// Add a recipe item
const addItem = async (req, res) => {
  const { step_id, item_name, quantity } = req.body;
  try {
    const [results] = await db.query(
      'INSERT INTO RecipeItems (step_id, item_name, quantity) VALUES (?, ?, ?)',
      [step_id, item_name, quantity]
    );
    res.json({ recipe_item_id: results.insertId, step_id, item_name, quantity });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Fetch items for a recipe step
const getItems = async (req, res) => {
  const { step_id } = req.params;
  try {
    const [results] = await db.query('SELECT * FROM RecipeItems WHERE step_id = ?', [step_id]);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addItem, getItems };