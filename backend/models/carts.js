module.exports=(sequelize,DataTypes)=>{
   const Cart= sequelize.define("Cart",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
     },
     userId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        foreignKey:true,
    },
    productid:{
        type:DataTypes.INTEGER , 
        foreignKey:true,
        allowNull:false 
     
      }
   })
   return Cart
}