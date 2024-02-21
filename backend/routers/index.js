const appRouter =require("express").Router();
const {singUp}= require("../controllers/user.js")


appRouter.post('/singup',singUp)




module.exports=appRouter