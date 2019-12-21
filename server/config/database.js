require("dotenv").config();

const mysql = require("mysql");
/*
 **** Database Configureture
 */
const config = mysql.createConnection ({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database:process.env.MYSQL_DB,
  insecureAuth : true
  
});
/*
 **** Create Database Connection
 */
// const db = mysql.createConnection(config);

config.connect((err) => {
  if(!err){
    console.log('connected successfully...!');
  }else{
    console.log('connect failed')
  }
});
module.exports =  config;
