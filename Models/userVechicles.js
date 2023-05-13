const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')
const userVechicle = dbConnection.define('vechicles',{
    Vechiclenumber:{
        type : sequelize.INTEGER,
        allowNull : false,
        
    },
})

module.exports = userVechicle