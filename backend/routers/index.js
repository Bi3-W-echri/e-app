const appRouter =require("express").Router();
const {singUp,login}= require("../controllers/user.js")


appRouter.post('/singup',singUp)

appRouter.post('/login',login)


module.exports=appRouter