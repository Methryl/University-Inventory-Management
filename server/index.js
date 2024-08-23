const express = require('express')
const mysql = require('mysql2');
const app = express()
const dotenv = require('dotenv')
dotenv.config()

const port = 3000

var con = mysql.createConnection({
  host: "127.0.0.1",
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/assets', (req, res) => {
  con.connect(function(err) {
    if (err) throw err;
    console.log("requesting assets!");
    var sql = " select * from assets;";
    con.query(sql, function (err, result) {
      if (err) throw err;
      res.send(result)
    });
  });
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})