const models = require('./allModels')
const dbConnection = require('./dbConnection')


const relationships = async() =>{

    models.user_Model.hasMany(models.user_Vechicles_Model);
    models.user_Vechicles_Model.belongsTo(models.user_Model);

    models.user_Model.hasMany(models.log_Model);
    models.log_Model.belongsTo(models.user_Model);

    models.parking_Spot_Model.hasMany(models.log_Model);
    models.log_Model.belongsTo(models.parking_Spot_Model);

    models.user_Vechicles_Model.hasMany(models.log_Model);
    models.log_Model.belongsTo(models.user_Vechicles_Model);
    try {
      await dbConnection.sync();
        console.log('sync');
    } catch (error) {
        console.log(error);
    }
}

module.exports = relationships();