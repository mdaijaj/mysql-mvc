const connection=require('../models/user')


const signup= (req, res)=>{
   const {name, email, password}=req.body;
   connection.query("Insert into `users` (name, email, password) VALUES ('"+name+"', '"+email+"', '"+password+"')",    (err, result)=>{
      if(!err || result){
         res.send("inserted data success");
      }else{
         console.log("error while inserting data", err)
      }
   })
}

module.exports={
   signup
}