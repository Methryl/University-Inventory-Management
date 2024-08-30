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
  var assetssql = " CREATE TABLE if not exists assets  (id INT PRIMARY KEY AUTO_INCREMENT,title VARCHAR(255),asset_id VARCHAR(255),company VARCHAR(255),asset_type VARCHAR(255),serial_number VARCHAR(255),assigned_to int, FOREIGN KEY (assigned_to) REFERENCES user(id));";
  con.query(assetssql, function (err, result) {
    if (err) throw err;
  });
  var usersql = " CREATE TABLE if not exists users  (id INT PRIMARY KEY AUTO_INCREMENT,name varchar(30), sname varchar (30), mail varchar(99));";
  con.query(usersql, function (err, result) {
    if (err) throw err;
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