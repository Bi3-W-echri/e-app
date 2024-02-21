const db = require('../models/indext')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
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
    }
    
  
}