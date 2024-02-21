const db = require('../models/indext')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const crypto = require("crypto")

const secret_key=crypto.randomBytes(64).toString('base64');
console.log("this my secret",secret_key);
module.exports={
   
    singUp: async (req,res)=>{
       const username= req.body.username
       const email=req.body.email
       const password=req.body.password
       const role =req.body.role; 
        const saltRound= 10

        try{
            const hashPassword = await bcrypt.hash(password,saltRound)
           const addUser = await db.User.create({username:username,email:email,password:hashPassword,role:role})
            res.status(200).json(addUser)
        }
   catch (err) {console.log(err)}
    },
    login:async(req,res)=>{

     const email =req.body.email
     const password=req.body.password

     try{
        const userExist =await db.User.findOne({where:{email:email}})
      if(!userExist){
        res.status(404).send("user not found")
      }
     const valid=await bcrypt.compare(password,userExist.password)
      if(!valid){
        res.send("unvalid password")
      }
     const token =jwt.sign({id:userExist.id,email:userExist.email},secret_key,{expiresIn:"1h"})
     res.status(201).json( {"token":token,"user":userExist })

     }
     catch(err) {
        console.log(err);
     }
    }
    
  
}