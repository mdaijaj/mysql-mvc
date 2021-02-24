const connection=require('../database/db')

var sql = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255) UNIQUE, password VARCHAR(255))";
connection.query(sql, (err, result)=> {
  if(result){
    console.log("Table created success");
  }else{
    console.log("table already exits")
  }
});

module.exports=connection;