// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [inputText, setInputText] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    try {
      const result = await axios.post('http://localhost:5000/api/deepseek', {
        text: inputText,
      });
      setResponse(result.data.response);
    } catch (error) {
      console.error('Error calling DeepSeek API:', error);
      setResponse('Failed to fetch response from DeepSeek API.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>In-stock App</h1>
      <div>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter your text here..."
          rows={4}
          cols={50}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        <h2>Response:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default App;