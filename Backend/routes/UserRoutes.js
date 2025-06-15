const express = require("express")
const router = express.Router()
const user = require("../model/userModel")
const jwt = require("jsonwebtoken")

router.post('/signup',async(req,res)=>{
    try{
        const {username,email,password,phoneno} = req.body
        const existeduser = await user.findOne({email})
        if(existeduser){
            res.status(400).json({message:"already user existed"})
        }
        const newuser = new user({username,email,password,phoneno})
        await newuser.save()
         res.status(200).json({message:"signup successfull"})
    }
    catch(err){
        console.log(err)
        res.status(400).json({message:err.message})
    }
})

router.post('/',async(req,res)=>{
    try{
        const {email,password} =req.body
       const userlogin = await user.findOne({email})
        if(!userlogin){
           return res.status(400).json({message:"mail not found"})
        }
        if(userlogin.password == password){
          const payload ={email:user.email,password:user.password}
          const token = jwt.sign(payload,'bookApp')
          return  res.status(200).json({message:"login successful" ,token:token })
        }
        else{
        return res.status(400).json({message:"incorrect password"})
        }
         
    }
    catch(err){
        console.log(err)
        res.status(400).json({message:err.message})
    }
})

module.exports = router