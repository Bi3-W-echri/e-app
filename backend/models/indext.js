const { Sequelize, DataTypes } = require("sequelize");


const sequelize = new Sequelize("bi3Wechri","root","s07249446667",
  {
    HOST: "localhost",
    dialect: "mysql",
  }
);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

sequelize.authenticate()
.then(()=>{
    console.log("connect");
})
.catch((err)=>{console.log(err);})


module.exports=db