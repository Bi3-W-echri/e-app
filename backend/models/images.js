const { User } = require("./indext")

module.exports=(sequelize,DataTypes)=>{
    const Image= sequelize.define("Image",{
     id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
     },
     image:{
        type:DataTypes.STRING,
        allowNull:false
       },
    productid:{
    type:DataTypes.INTEGER , 
    foreignKey:true,
    allowNull:false 
 
  }
    })
    return Image
}