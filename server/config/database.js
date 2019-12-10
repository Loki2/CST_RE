const mysql = require("mysql");
/*
 **** Database Configureture
 */
const config = mysql.createConnection ({
  host: "localhost",
  user: "root",
  password: "",
  database: "cst",
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
