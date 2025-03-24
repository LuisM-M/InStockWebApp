const axios = require('axios');

// Function to call the DeepSeek API
const callDeepSeekAPI = async (text) => {
  try {
    // Replace with the actual DeepSeek API endpoint and parameters
    const response = await axios.post('https://api.deepseek.com/endpoint', {
      text,
      apiKey: process.env.DEEPSEEK_API_KEY, // Use the API key from environment variables
    });

    // Return the response from the DeepSeek API
    return response.data;
  } catch (error) {
    console.error('Error calling DeepSeek API:', error.message);
    throw new Error('Failed to fetch response from DeepSeek API.');
  }
};

module.exports = { callDeepSeekAPI };