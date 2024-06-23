const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// In-memory database (simple array)
let users = [];

// POST route for form submission
app.post('/submit', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and Email are required.' });
  }

  // Save data to "database" (array)
  users.push({ name, email });

  res.status(200).json({ message: 'Form submitted successfully!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
