const { Sequelize, DataTypes } = require("sequelize");



const sequelize = new Sequelize("bi3Wechri","root","mySql123456@",
  {
    HOST: "localhost",
    dialect: "mysql",
  }
);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User=require("./users.js")(sequelize, DataTypes)
db.Product=require('./products.js')(sequelize,DataTypes)
//associations
db.User.hasMany(db.Product,{foreignKey:"userId"})
db.Product.belongsTo(db.User,{
  as:"User",
  foreignKey:"userId",
  onDelete:"CASCADE"
  
})


db.sequelize.sync()
sequelize.authenticate()
.then(()=>{
    console.log("connect");
})
.catch((err)=>{console.log(err);})


module.exports=db