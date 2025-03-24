const path = require('path');
const express = require('express');
const app = express();

// Your existing API routes
app.use('/api', require('./routes/api'));

// Serve static files from React build
app.use(express.static(path.join(__dirname, '../build')));

// Handle React routing (return all requests to React app)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));