const OpenAI = require('openai');

// Initialize the OpenAI client with DeepSeek's base URL
const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com', // DeepSeek API endpoint
  apiKey: process.env.DEEPSEEK_API_KEY, // Use the API key from environment variables
});

// Function to call the DeepSeek API
const callDeepSeekAPI = async (text) => {
  try {
    // Create a chat completion
    const completion = await openai.chat.completions.create({
      model: 'deepseek-chat', // Use 'deepseek-chat' for DeepSeek-V3
      messages: [
        {
          role: 'user', // Only include the user's input
          content: text,
        },
      ],
      max_tokens: 100, // Limit the response to 100 tokens
      temperature: 0.7, // Adjust for creativity (0 = deterministic, 1 = creative)
    });

    // Extract the response content
    const responseContent = completion.choices[0].message.content;
    return responseContent;
  } catch (error) {
    console.error('Error calling DeepSeek API:', error.message);
    throw new Error('Failed to fetch response from DeepSeek API.');
  }
};

module.exports = { callDeepSeekAPI };