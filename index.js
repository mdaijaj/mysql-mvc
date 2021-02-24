const express=require('express')
const bodyParser=require('body-parser')
const app=express()
require('dotenv').config() 

//middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//routes
const router = require('./routes/users')
app.use('/', router)


//server localhost
const port=process.env.PORT;
app.listen(port,()=>{
   console.log("server is listening this port", port)
}) 
