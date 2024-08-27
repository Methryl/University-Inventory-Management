const express = require('express')
const mysql = require('mysql2');
const app = express()
const dotenv = require('dotenv')

dotenv.config()

const port = 3001

var con = mysql.createConnection({
  host: "127.0.0.1",
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB
});


function initDatabase(){
  console.log("creating assets table");
  var sql = " CREATE TABLE assets (id INT PRIMARY KEY,title VARCHAR(255),asset_id VARCHAR(255),company VARCHAR(255),asset_type VARCHAR(255),serial_number VARCHAR(255),assigned_to VARCHAR(255));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result)
  });
}
initDatabase();

app.get('/assets', (req, res) => {
  con.connect(function(err) {
    if (err) throw err;
    console.log("requesting assets!");
    var title
    var sql
    if (req.query.title != null) {
      title = req.query.title
      var cleanQuery = title.replace(/[+|'|"|_|-]+/gi, "");
      console.log(cleanQuery);
      sql = " select * from assets WHERE title LIKE '%"+cleanQuery+"%';";
    }else{
      sql = " select * from assets;";
    }    
    con.query(sql, function (err, result) {
      if (err) throw err;
      res.send(result)
    });
  });
  
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})