const express = require('express');
const app = express();
const routes = require('./routes');

// Middleware to process form submissions
app.use(express.urlencoded({ extended: true }));

// Serve HTML files
app.use(express.static('public'));

// Use the router for all routes
app.use('/', routes);

// Middleware to process the form
app.post('/process-form', (req, res) => {
  const { name } = req.body;
  res.send(`Form submitted! Hello, ${name}!`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
