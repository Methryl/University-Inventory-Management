const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

const port = 3001;

// Middleware
app.use(cors());
app.use(express.json()); // Add this line to parse JSON request bodies

const con = mysql.createConnection({
  host: "127.0.0.1",
  port: process.env.DB_PORT, // Changed to process.env.DB_PORT
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB
});

// Initialize database
function initDatabase() {
  console.log("Creating assets and users tables");
  const assetssql = `
    CREATE TABLE IF NOT EXISTS assets (
      id INT PRIMARY KEY AUTO_INCREMENT,
      title VARCHAR(255),
      asset_id VARCHAR(255),
      company VARCHAR(255),
      asset_type VARCHAR(255),
      serial_number VARCHAR(255),
      assigned_to INT,
      FOREIGN KEY (assigned_to) REFERENCES users(id)
    );`;
  con.query(assetssql, function (err, result) {
    if (err) throw err;
  });
  
  const usersql = `
    CREATE TABLE IF NOT EXISTS users (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(30),
      sname VARCHAR(30),
      mail VARCHAR(99)
    );`;
  con.query(usersql, function (err, result) {
    if (err) throw err;
  });
}

initDatabase();

app.get('/assets', (req, res) => {
  const { title } = req.query;

  let sql = 'SELECT * FROM assets';
  let params = [];

  // If there is a title query, modify the SQL statement
  if (title) {
    sql += ' WHERE title LIKE ?';
    params.push(`%${title}%`);
  }

  con.query(sql, params, (err, result) => {
    if (err) {
      console.error('Error fetching assets:', err);
      res.status(500).send('Error fetching assets');
      return;
    }
    res.send(result);
  });
});

app.post('/assets', (req, res) => {
  const { title, asset_id, company, asset_type, serial_number, assigned_to } = req.body;

  const sql = `
    INSERT INTO assets (title, asset_id, company, asset_type, serial_number, assigned_to)
    VALUES (?, ?, ?, ?, ?, ?);
  `;

  con.query(sql, [title, asset_id, company, asset_type, serial_number, assigned_to], function (err, result) {
    if (err) {
      console.error('Error inserting asset:', err);
      res.status(500).send('Error inserting asset');
      return;
    }
    res.status(201).send(result);
  });
});


app.get('/users', (req, res) => {
  const { id } = req.query;

  let sql = 'SELECT * FROM users';
  let params = [];

  if (id) {
    sql += ' WHERE id LIKE ?';
    params.push(`${id}`);
  }

  con.query(sql, params, (err, result) => {
    if (err) {
      console.error('Error fetching users:', err);
      res.status(500).send('Error fetching users');
      return;
    }
    res.send(result);
  });
});

app.post('/users', (req, res) => {
  const { name, sname, mail } = req.body;

  if (!name || !sname || !mail) {
    return res.status(400).send('All fields are required');
  }

  const sql = `
    INSERT INTO users (name, sname, mail)
    VALUES (?, ?, ?);
  `;

  con.query(sql, [name, sname, mail], function (err, result) {
    if (err) {
      console.error('Error inserting user:', err);
      res.status(500).send('Error inserting user');
      return;
    }
    res.status(201).send(result);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});