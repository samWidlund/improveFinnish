import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

const debugTimeOut = 2000; // increase by milliseconds to debug

app.use(cors());
app.use(express.json());

const dbPath = path.join(__dirname, '../data/words.sqlite');

const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Database path:', dbPath);
    console.log('Successfully connected to database!');
  }
});

app.get('/data', (req, res) => {
  db.all('SELECT * FROM wordList', [], (err, rows) => {
    setTimeout(() => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(rows);
      }
    }, debugTimeOut); 
  });
});

app.listen(PORT, () => {
  console.log(`Server runs on: http://localhost:${PORT}`);
});
