
const db = require('../models/indext')
module.exports={
   
    gett:(req,res)=>{
        res.json('hello from controller')
    },
    db:db
 
}