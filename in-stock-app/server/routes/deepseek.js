const express = require('express');
const { callDeepSeekAPI } = require('../controllers/deepseek');

const router = express.Router();

// Route to handle DeepSeek API requests
router.post('/', async (req, res) => {
  const { text } = req.body;

  try {
    // Call the DeepSeek API using the controller function
    const response = await callDeepSeekAPI(text);
    res.json({ response });
  } catch (error) {
    console.error('Error in DeepSeek route:', error.message);
    res.status(500).json({ error: 'Failed to fetch response from DeepSeek API.' });
  }
});

module.exports = router;