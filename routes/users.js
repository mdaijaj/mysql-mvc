const express=require('express');
const users = require('../controller/users');
const router=express.Router();
const user=require('../controller/users')

router.post('/signup', user.signup)
router.post('/login', users.login)
router.get('/profile', users.profile)

module.exports=router;