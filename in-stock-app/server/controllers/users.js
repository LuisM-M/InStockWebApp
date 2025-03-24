// server/controllers/users.js
const db = require('../db');

// Add a user
const addUser = async (req, res) => {
  const { username, login, age, name } = req.body;
  try {
    const [results] = await db.query(
      'INSERT INTO Users (username, login, age, name) VALUES (?, ?, ?, ?)',
      [username, login, age, name]
    );
    res.json({ user_id: results.insertId, username, login, age, name });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Fetch all users
const getUsers = async (req, res) => {
  try {
    const [results] = await db.query('SELECT * FROM Users');
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addUser, getUsers };