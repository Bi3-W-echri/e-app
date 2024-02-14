module.exports=(sequelize,DataTypes)=>{
    const Product =sequelize.define('Product',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull: false,

        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
            },
        categorie:{
            type:DataTypes.STRING,
            allowNull:false
            }, 
        price:{
                type:DataTypes.INTEGER,
                allowNull:false,

            },
        color1:{
                type:DataTypes.STRING,
                 allowNull:false,
            },
        color2:{
                type:DataTypes.STRING,
                allowNull:true
                
            },
        promotion:{
                type:DataTypes.INTEGER,
                allowNull:true

            },
        rate:{
            type:DataTypes.INTEGER,
            allowNull:true

        },
        userId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            foreignKey:true,

        }
            
        }
        );
        return  Product;

    }

        
    
