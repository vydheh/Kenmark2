const {Sequelize,Datatypes} = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(config.development);

const users = sequelize.define('User',{
    name :{
        type : sequelize.DATETIME,
        autoIncrement: true,
        primaryKey : true
    },
    mobilenumber:{
        type : Datatypes.INTEGER,
        allowNull : false,
        unique: true
    },
    password:{
        type : Datatypes.STRING,
        allowNull:false
    },
    Dateofbirth:{
        type : Datatypes.DATE,
        allowNull:false
    }
})
const userVechicle = sequelize.define('Vechicles',{
    userID :{
        type : Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey : true
    },
    Vechiclenumber:{
        type : Datatypes.INTEGER,
        allowNull : false,
        unique: true
    },
})
const log = sequelize.define('loggingdetails',{

    userID :{
        type : Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey : true
    },
    vehicleID :{
        type : Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey : true
    },
    ParkingspotID :{
        type : Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey : true
    },
    checkInTime:{
        type : Datatypes.INTEGER,
        allowNull : false,
        unique: true
    },
    checkOutTime:{
        type : Datatypes.DATETIME,
        allowNull : false,
        unique: true
    },
    Duration:{
        type : Datatypes.INTEGER,
        allowNull : false,
        unique: true
    },
})
const parkingSpot = sequelize.define('parkingspot',{
    code :{
        type : Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey : true

    },
    name:{
        type : Datatypes.STRING,
        allowNull : false,
        unique: true
    },
    address:{
        type : Datatypes.STRING,
        allowNull : false,
        unique: true
    },
});

const db = {
    sequelize,
    models :{
        users,
        userVechicle,
        parkingSpot,
        log,
    },
};

sequelize.sync({force:true})
.then(()=>{
    console.log("Synchronized");
})
.catch((error) =>{
    console.error('Error synchroniation')
});

module.exports = db;