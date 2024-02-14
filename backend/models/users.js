module.exports=(sequelize,DataTypes)=>{
    const User= sequelize.define('User',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull: false,

        },
        username:{
            type: DataTypes.STRING,
            allowNull: false,
           
        },
        email:{
            type:DataTypes.STRING,
            unique:true,
            allowNull:false,
            
      
        },
        password:{
            type:DataTypes.STRING,
             allowNull:false,
        },
        image:{
            type:DataTypes.STRING,
            allowNull:true,
            defaultValue:"https://cdn1.iconfinder.com/data/icons/basic-ui-set-v5-user-outline/64/Account_profile_user_avatar_small-512.png"
        }
        });
        return User;

}