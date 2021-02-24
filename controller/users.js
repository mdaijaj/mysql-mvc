const connection=require('../models/user')
const jwt=require('jsonwebtoken')
const Bcrypt = require('bcrypt')
const jwt_decode = require('jwt-decode')
const salt =10 //any random value


//user signup
const signup= async (req, res)=>{
   //encrpyted password
   const {name, email, password}=req.body;
   let users_password=await Bcrypt.hashSync(password, salt)
   console.log(users_password)
   connection.query(`Insert into users (name, email, password) VALUES ('${name}', '${email}', '${users_password}')`,   
    (err, result)=>{
      if(!err || result){
         res.send("inserted data success");
      }else{
         console.log(err.message)
         res.send("This mail allready exists...")
      }
   })
}


//user login
const login= async (req,res)=>{
   const { email, password}=req.body
   connection.query(`select * from users where email="${email}"`, (err, result)=>{
      if(!err || result){
         console.log(result)
         if(Bcrypt.compareSync(password, result[0].password)){
            console.log(result)
            var token = jwt.sign({ packet: result }, process.env.JWT_SECRET, {expiresIn: 86400 }); // expires in 24 hours
            res.send({
               token: token,
               user_detail: result
            })
         }else{
            console.log(err)
            res.send("email is not found..")
         }
      }else{
         res.send("email is not found..")
      }
   })
}


// user  profile show authentication
const profile= async (req,res)=>{
   const mycookie = req.headers.cookie
   token = mycookie.slice(6, mycookie.length)
   const decodeToken = jwt_decode(token)
   console.log(decodeToken)
   let verified_email=decodeToken.packet[0].email
   console.log(verified_email)
   connection.query(`select * from users where email="${verified_email}"`, (err, result)=>{
      console.log(result)
      res.send({"status": result, message: "profile user show sucessfully!"})
   })
      
}

module.exports={
   signup,
   login,
   profile
}