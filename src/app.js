const express = require('express');
const app = express();
const indexRouter = require('./routes/index');

// Middleware to parse JSON
app.use(express.json());

// Use the index router for all routes
app.use('/', indexRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

 
