const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

const db = new sqlite3.Database('../data/source.db', (err) => {
  if (err) {
    console.error('Could not connect to the database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Skapa en API-route för att hämta data
app.get('/data', (req, res) => {
  db.all('SELECT * FROM words', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ data: rows });
  });
});

// Starta servern
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
