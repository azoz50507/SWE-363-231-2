const express = require('express');
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, this is the home page!');
});

app.get('/about', (req, res) => {
  res.send('This is the about page.');
});


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
