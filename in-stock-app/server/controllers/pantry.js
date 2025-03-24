// server/controllers/pantry.js
const db = require('../db');

// Add a pantry item
const addPantryItem = async (req, res) => {
  const { user_id, item_name, expiration_date, quantity } = req.body;
  try {
    const [results] = await db.query(
      'INSERT INTO Pantry (user_id, item_name, expiration_date, quantity) VALUES (?, ?, ?, ?)',
      [user_id, item_name, expiration_date, quantity]
    );
    res.json({ pantry_id: results.insertId, user_id, item_name, expiration_date, quantity });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Fetch pantry items for a user
const getPantryItems = async (req, res) => {
  const { user_id } = req.params;
  try {
    const [results] = await db.query('SELECT * FROM Pantry WHERE user_id = ?', [user_id]);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addPantryItem, getPantryItems };