const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 5000;

// Enable CORS
app.use(cors());
app.use(express.json());

// Setup koneksi ke MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',      // Ganti dengan username MySQL Anda
  password: 'gabymarklee321',      // Ganti dengan password MySQL Anda
  database: 'food_order'
});

// API untuk mendapatkan menu makanan
app.get('/api/menu', (req, res) => {
  db.query('SELECT * FROM menu', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
