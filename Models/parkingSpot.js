const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')
const parkingSpot = dbConnection.define('parkingspot',{
    code :{
        type : sequelize.INTEGER,
        allowNull : false

    },
    name:{
        type : sequelize.STRING,
        allowNull : false,
       
    },
    address:{
        type : sequelize.STRING,
        allowNull : false,

    },
});

module.exports = parkingSpot;