const { Sequelize, DataTypes } = require("sequelize");
const conf=require('../config.js')


const sequelize = new Sequelize(conf.database,conf.username,conf.password,
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
db.Image=require('./images.js')(sequelize,DataTypes)
db.Favorite=require('./favorites.js')(sequelize,DataTypes)
db.Cart=require('./carts.js')(sequelize,DataTypes)
//associations
db.User.hasMany(db.Product,{foreignKey:"userId"})
db.Product.belongsTo(db.User,{
  as:"User",
  foreignKey:"userId",
  onDelete:"CASCADE"
  
})
db.Product.hasMany(db.Image,{foreignKey:"productid"})
db.Image.belongsTo(db.Product,{
  as:"Product",
  foreignKey:"productid",
  onDelete:"CASCADE"
})
db.User.hasMany(db.Favorite,{foreignKey:"userId"})
db.Favorite.belongsTo(db.User,{as:'User',foreignKey:"userId"})
db.Product.hasMany(db.Favorite,{foreignKey:"productid"})
db.Favorite.belongsTo(db.Product,{
  as:"Product",
foreignKey:"productid",
onDelete:"CASCADE"})
db.User.hasMany(db.Cart,{foreignKey:"userId"})
db.Cart.belongsTo(db.User,{as:"User",foreignKey:"userId",onDelete:"CASCADE"})
db.Product.hasMany(db.Cart,{foreignKey:"productid"})
db.Cart.belongsTo(db.Product,{as:"Product",foreignKey:"productid",onDelete:"CASCADE"})
console.log('jhk',db.sequelize.models);


db.sequelize.sync()
sequelize.authenticate()
.then(()=>{
    console.log("connect");
})
.catch((err)=>{console.log(err);})


module.exports=db