
const User = require('../models/userModel')

//loginUser
const loginUser = async (req,res)=>{
    res.json({mssg: "login user" })
}


//signupUser
const signupUser = async (req,res)=>{
    res.json({mssg: "signup user" })
}

module.exports = {signupUser, loginUser}