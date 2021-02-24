const mysql = require('mysql');

const connection  = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : process.env.DB_NAME
});

connection.connect((err, dbs)=> {
  if(!err){
	  console.log("db connected successfully!")
  }else{
	  console.log("unable to connected db.....")
  }
});

module.exports=connection;