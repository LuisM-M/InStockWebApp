require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import routers
const usersRouter = require('./routes/users');
const pantryRouter = require('./routes/pantry');
const recipesRouter = require('./routes/recipes');
const stepsRouter = require('./routes/steps');
const itemsRouter = require('./routes/items');
const deepseekRouter = require('./routes/deepseek'); 

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Use routers
app.use('/api/users', usersRouter);
app.use('/api/pantry', pantryRouter);
app.use('/api/recipes', recipesRouter);
app.use('/api/steps', stepsRouter);
app.use('/api/items', itemsRouter);
app.use('/api/deepseek', deepseekRouter);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});