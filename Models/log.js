const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')
const log = dbConnection.define('loggingdetails',{

    checkInTime:{
        type : sequelize.DATE,
        allowNull : false,

    },
    checkOutTime:{
        type : sequelize.DATE,
        allowNull : true,

    },
    Duration:{
        type : sequelize.STRING,
        allowNull : true,

    },
})
module.exports = log