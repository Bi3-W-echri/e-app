const appRouter =require("express").Router();
const {gett}= require("../controllers/user.js")


appRouter.get('/get',gett)




module.exports=appRouter